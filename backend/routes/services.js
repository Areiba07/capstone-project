import express from "express";
import { z } from "zod";
import { sql } from "../db.js";

const serviceRouter = express.Router();

const ServiceSchema = z.object({
  service_id: z.number(),
  service_name: z.string(),
  service_description: z.string(),
  service_image: z.string(),
});

serviceRouter.get("/", async (req, res) => { //get all service
  const todos = await sql`SELECT * FROM "Service"`;
  res.status(200).send(todos);
});

serviceRouter.get("/:id", async (req, res) => {//get service specific id
  const { id } = req.params;
  const [foundService] = await sql`SELECT * FROM "Service" WHERE user_id = ${Number(id)};`;

  if (foundService) {
    res.status(200).send(foundService);
  } else {
    res.status(404).send("todo not found");
  }
});

/*todosRouter.post("/", async (req, res) => {
  const newTodo = {
    ...req.body,   
  };

  const parsedResult = TodoSchema.safeParse(newTodo);

  if (!parsedResult.success) {
    return res.status(400).send(
      parsedResult.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))
    );
  }
  const [createdTodo] = 
  await sql`INSERT INTO "User"(user_email, user_password)
	VALUES (${newTodo.email}, ${newTodo.password});`;
  res.status(201).send(newTodo);
});

todosRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { task, isCompleted } = req.body;
  const foundIndex = todos.findIndex((todo) => todo.id === Number(id));

  if (foundIndex > -1) {
    const updatedTodo = {
      ...todos[foundIndex],
      task,
      isCompleted,
    };
    todos[foundIndex] = updatedTodo;
    res.status(200).send(updatedTodo);
  } else {
    res.status(404).send("todo not found");
  }
});

todosRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const foundIndex = todos.findIndex((todo) => todo.id === Number(id));
  if (foundIndex > -1) {
    todos = todos.filter((_, index) => index !== foundIndex);
    res.status(204).send("");
  } else {
    res.status(404).send("todo not found");
  }
});*/

export default serviceRouter;
