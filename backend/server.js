import express from "express";
import morgan from "morgan";
import todosRouter from "./routes/todo.js";
import serviceRouter from "./routes/services.js";
import authRouter from "./routes/auth.js";
import cors from "cors";

const app = express();

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`App is listening at http://${host}:${port}`);
});

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/todos", todosRouter);
app.use("/api/service", serviceRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello world 2 sfdsf");
});
