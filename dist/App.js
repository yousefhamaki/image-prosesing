"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const appController_1 = __importDefault(require("./app/controllers/appController"));
const app = (0, express_1.default)();
const port = 5001;
app.use(express_1.default.static(`${__dirname}../images`));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../images")));
app.get("/", appController_1.default.Home);
app.get("/resize", appController_1.default.upload);
app.listen(port, () => console.log(`Server is lestening on port ${port}`));
