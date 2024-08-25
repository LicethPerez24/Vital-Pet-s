import asyncHandler from "express-async-handler";
import { validationResult, body } from "express-validator";
import { transporter } from "./sendEmail.js";
import bcrypt from "bcrypt";
import { addGeneralRefreshToken, createUser, getUser } from "../db/queries.js";
import jwt from "jsonwebtoken";

const validateMessage = [
  body("name").not().isEmpty().withMessage("Es necesario un nombre"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Es necesario un correo electronico"),
  body("tel").not().isEmpty().withMessage("Es necesario un numero de telefono"),
  body("service").not().isEmpty().withMessage("Es necesario un servicio"),
  body("message").not().isEmpty().withMessage("Es necesario un mensaje"),
];

const validateSignup = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Es necesario un correo electronico")
    .isEmail()
    .withMessage("Email no es valido"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Es necesario una contraseña")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("firstName").not().isEmpty().withMessage("Es necesario un nombre"),
  body("lastName").not().isEmpty().withMessage("Es necesario un apellido"),
];

export const vetController = {
  sendMessagePost: [
    validateMessage,
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), correct: false });
      }

      const { name, email, tel, service, message } = req.body;
      const mailData = {
        from: process.env.EMAL,
        to: "sugo4354@gmail.com",
        subject: "Contacto Web",
        text: `Hola ${name}, ${email} ${tel} ${service} ${message}`,
      };

      transporter.sendMail(mailData, (err, _info) => {
        if (err) {
          return res.status(404).json(err);
        }
        return res.status(200).json({
          messageSucces: "El mensaje ha sido enviado correctamente",
          correct: true,
        });
      });

      return res.status(200).json({
        messageSucces: "El mensaje ha sido enviado correctamente",
        correct: true,
      });
    }),
  ],

  signupPost: [
    validateSignup,
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), correct: false });
      }
      const { email, firstName, lastName, password } = req.body;

      const pwHash = await bcrypt.hash(password, 10);

      const username = { username: firstName + " " + lastName };

      const accessToken = generateAccessToken(username, process.env.SECRET);
      const refreshToken = jwt.sign(username, process.env.REFRESH_SECRET);
      await addGeneralRefreshToken(refreshToken);

      const userData = {
        firstName,
        lastName,
        email,
        password: pwHash,
      };

      const accountData = {
        provider: "credentials",
        providerAccountId: userData.email,
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
      };

      try {
        createUser(userData, accountData);
        res.status(200).json({ message: "Cuenta creada" });
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    }),
  ],

  loginPost: asyncHandler(async (req, res) => {
    try {
      const { refreshToken, accessToken } = await getUserfromDB(req, res);
      return res.status(200).json({ accessToken, refreshToken });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }),

  updateGet: asyncHandler(async (req, res) => {
    res.status(200).json({ message: "funcionando" });
  }),
};

export const authenticatedVet = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.SECRET, { expiresIn: "15s" });
};

const getUserfromDB = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser(email);

  if (user) {
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      throw new Error("Invalid password");
    }
    const username = { username: user.firstName + " " + user.lastName };
    const accessToken = generateAccessToken(username);
    const refreshToken = jwt.sign(username, process.env.REFRESH_SECRET);
    await addGeneralRefreshToken(refreshToken);
    return { accessToken, refreshToken };
  }
};
