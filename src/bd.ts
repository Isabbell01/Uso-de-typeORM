import { DataSource } from "typeorm";
import { User } from "./entities/user";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "postgres",
  entities: [User],
  logging: true,
  synchronize: true,
});
