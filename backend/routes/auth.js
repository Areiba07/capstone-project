import express from "express";
import { isValid, z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sql } from "../db.js";
//import camelcaseKeys from "camelcase-keys";
import tokenValidator from "../services/tokenValidator.js";
import { environment } from "../environment.js";

const { JWT_SECRET } = environment;

const authRouter = express.Router();

const userSchema = z.object({
  user_email: z.string().min(1).email(),
  user_password: z
    .string()
    .min(8, { message: "Should be at least 8 characters long" }),
});

authRouter.post("/sign-up", async (req, res) => {
  const result = await userSchema.safeParseAsync(req.body);

  if (!result.success) {
    return res.status(400).send(
      result.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }

  const { data } = result;
  const hashPassword = await bcrypt.hash(data.user_password, 10);
  try {
    const [createdUser] =
      await sql`INSERT INTO "User"(user_email, user_password)
  VALUES (${data.user_email}, ${hashPassword}) RETURNING user_id, user_email`;

    const token = generateToken(createdUser);

    return res
      .status(201)
      .cookie("token", token, { httpOnly: true })
      .json(createdUser);
  } catch (e) {
    console.log(e.name);
    console.log(e.message);
    if (
      e.message ===
      `duplicate key value violates unique constraint "User_user_email_key"`
    ) {
      return res
        .status(409)
        .json({ error: "email is not available or is already in use" });
    }
  }
});

authRouter.get("/verify", (req, res) => {
  console.log(req.cookies);
  const { isValid, ...props } = tokenValidator(req.cookies.token);

  if (isValid) {
    return res.json(props);
  } else {
    return res.status(401).json(props);
  }
});

authRouter.post("/sign-in", async (req, res) => {
  const result = await userSchema.safeParseAsync(req.body);

  if (!result.success) {
    return res.status(400).send(
      result.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }
  const { user_email, user_password } = result.data;
  let [foundUser] =
    await sql`SELECT * FROM "User" WHERE user_email = ${user_email}`;
  if (!foundUser) {
    //console.log(foundUser.hashPassword);
    return res.status(404).json({ error: `Email does't exists` });
  }

  //foundUser = camelcaseKeys(foundUser);
  const isPasswordMatch = await bcrypt.compare(
    user_password,
    `${foundUser.user_password}`
  );

  if (!isPasswordMatch) {
    //console.log(`${foundUser.user_password}`);
    return res.status(401).json({ error: "Incorrect Password" });
  }

  const token = generateToken(foundUser);
  return res.status(200).cookie("token", token, { httpOnly: true }).json({
    id: foundUser.user_id,
    email: foundUser.user_email,
  });
});

authRouter.post("/sign-out", (req, res) => {
  return res.status(204).clearCookie("token", { httpOnly: true }).send();
});

function generateToken(user, expiresIn = "7d") {
  const payload = {
    user_email: user.user_email,
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

export default authRouter;
