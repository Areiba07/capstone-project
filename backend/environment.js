import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const environmentScheme = z.object({
    NODE_env: z
    .enum(["development","production", "test"])
    .default("development"),
    JWT_SECRET: z.string().min(1),
    DATABASE_URL: z.string().min(1),
});

const environment = environmentScheme.parse(process.env);

export {environment};