import express from "express";
import { z } from "zod";
import { sql } from "../db.js";

const userRouter = express.Router();

const userSchema = z.object({
  user_email: z.string(),
  user_firstname: z.string(),
  user_lastname: z.string(),
  user_contact: z.bigint(),
  region: z.string(),
  city: z.string(),
  province: z.string(),
  barangay: z.string(),
  user_image: z.string(),
});

userRouter.get("/", async (req, res) => {
  //get all users
  const users = await sql`SELECT * FROM "User"`;
  res.status(200).send(users);
});

userRouter.get("/:id", async (req, res) => {
  //get user specific id
  const { id } = req.params;
  const [foundUser] =
    await sql`SELECT * FROM "User" WHERE user_id = ${Number(id)};`;

  if (foundUser) {
    res.status(200).send(foundUser);
  } else {
    res.status(404).send("todo not found");
  }
});

export default userRouter;
