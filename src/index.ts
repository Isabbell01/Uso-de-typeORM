import "reflect-metadata";
import app from "./appp";
import { AppDataSource } from "./bd";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database is connected");
    app.listen(3000);
    console.log("Server is running on port 3000");
  } catch (e) {
    console.log(e);
  }
}

main();
