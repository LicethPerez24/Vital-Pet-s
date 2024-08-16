const asyncHandler = require("express-async-handler");
const { validationResult, body } = require("express-validator");
const { transporter } = require("./sendEmail");

const validateMessage = [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").not().isEmpty().withMessage("Email is required"),
  body("tel").not().isEmpty().withMessage("Phone number is required"),
  body("tel").not().isEmpty().withMessage("Phone number is required"),
  body("service").not().isEmpty().withMessage("Please select a service"),
  body("message").not().isEmpty().withMessage("Message is required"),
];

exports.sendMessagePost = [
  validateMessage,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, tel, service, message } = req.body;
    const mailData = {
      from: process.env.EMAIL,
      to: "sugo4354@gmail.com",
      subject: "Contacto Web",
      text: `Hola ${name}, ${email} ${tel} ${service} ${message}`,
    };
    await transporter.sendMail(mailData, (err, info) => {
      if (err) {
        return console.log(err);
      }
      res.redirect("https://vital-pet-s.vercel.app/contacto");
    });
    res.redirect("https://vital-pet-s.vercel.app/contacto");
  }),
];
