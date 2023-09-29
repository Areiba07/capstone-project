import express from "express";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sql } from "../db.js";

const {JWT_SECRET} = process.env;

const authRouter = express.Router();

const userSchema = z.object({
  user_email: z.string().min(1).email(),
  user_password: z
    .string()
    .min(8, { message: "Should be at least 8 characters long" }),
});

authRouter.post("/seekerSignup", async (req, res) => {
  const result = await userSchema.safeParseAsync(req.body);

  if (!result.success) {
    return res.status(400).send(
      result.error.errors.map((err) => ({
        user_email: err.path.join("."),
        user_password: err.message,
      }))
    );
  }

  const { data } = result;
  const hashPassword = await bcrypt.hash(data.user_password, 10);

  const [createdUser] = await sql`INSERT INTO "User"(user_email, user_password)
  VALUES (${data.user_email}, ${hashPassword}) RETURNING user_id, user_email`;

  const token = generateToken(createdUser);

  return res.status(201).cookie('token', token, {httpOnly: true}).send(createdUser);
});

function generateToken(user, expiresIn = "7d"){
    const payload = {
        user_email: user.user_email,
    }
    return jwt.sign(payload, JWT_SECRET, {expiresIn});
} 

export default authRouter;
