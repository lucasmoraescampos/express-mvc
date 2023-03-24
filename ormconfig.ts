import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "api_db",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
});