import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Book } from "./entity/Book";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "123",
  database: process.env.DB_NAME || "library_db",
  synchronize: true,
  logging: false,
  entities: [User, Book],
  migrations: [],
  subscribers: [],
  dropSchema: true,
});
