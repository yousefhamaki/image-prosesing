import express from "express";
import path from "path";
import appController from "./app/controllers/appController";

const app = express();
const port = 5001;

app.use(express.static(`${__dirname}../images`));
app.use("/images", express.static(path.join(__dirname, "../images")));

app.get("/", appController.Home);
app.get("/resize", appController.upload);

app.listen(port, () => console.log(`Server is lestening on port ${port}`));
