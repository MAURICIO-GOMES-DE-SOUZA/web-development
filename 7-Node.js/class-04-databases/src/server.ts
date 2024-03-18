import express from "express";
import { router } from "./routes";
import { sqliteConection } from "./sqlite3";

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


sqliteConection()
.then(() => console.log("Database is conected..."))
.catch((error) => console.error(error)
)
