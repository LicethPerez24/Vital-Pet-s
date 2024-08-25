import express from "express";
import cors from "cors";
import "dotenv/config";
import {
  authenticatedVet,
  vetController,
} from "./controllers/vetController.js";
import { prisma } from "./db/queries.js";

const app = express();

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(
//   "/auth/*",
//   ExpressAuth({
//     providers: [
//       Credentials({
//         credentials: {
//           email: { label: "Email" },
//           password: { label: "Password" },
//         },
//         authorize: async (credentials) => {
//           const user = isUser(credentials.email, credentials.password);
//
//           if (!user) {
//             throw new Error("No user found");
//           }
//
//           return user;
//         },
//       }),
//     ],
//     adapter: PrismaAdapter(prisma),
//   }),
// );
//
app.post("/login", vetController.loginPost);

app.get("/update", authenticatedVet, vetController.updateGet);

app.post("/contacto/success", vetController.sendMessagePost);

app.post("/signup", vetController.signupPost);

app.listen(process.env.PORT, () =>
  console.log(`listen to ${process.env.PORT}`),
);

process.on("SIGTERM", () => {
  prisma.$disconnect();
  process.exit(0);
});
