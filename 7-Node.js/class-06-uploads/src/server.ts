import express from "express";
import { router } from "./routes";
import { appErros } from "./errors/appErros";
import { pageNotFoundError } from "./errors/pageNotFoundError";
import { UPLOADS_FOLDER } from "./configs/uploadsConfigs";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

// rotas:
app.use(express.json());
app.use("/file", express.static(UPLOADS_FOLDER));
app.use(router);

app.use(pageNotFoundError);
app.use(appErros);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});
