"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchFile_1 = __importDefault(require("./../traits/SearchFile"));
const CheckQuery_1 = __importDefault(require("../traits/CheckQuery"));
const ResizeImage_1 = __importDefault(require("../traits/ResizeImage"));
const imagesPath = __dirname + "/../../../images/";
const resizePath = __dirname + "/../../../images/resize/";
exports.Home = (req, res) => {
    res.send("Hello from image prosessing api");
};
exports.upload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* request query handler */
    const required = { image: "required", width: "required|number", height: "required|number" };
    const requestInfo = (0, CheckQuery_1.default)(req.query, required);
    if (requestInfo.length > 0) {
        return res.send(requestInfo[0]);
    }
    /* handler image exist and resize exist */
    const image = req.query.image;
    const width = req.query.width;
    const height = req.query.height;
    const original = image + ".jpg";
    const resized = `${image}_${width}-${height}.jpg`;
    const existPath = imagesPath + original;
    const lastPath = `${resizePath + resized}`;
    const exist = (0, SearchFile_1.default)(existPath);
    const resize = (0, SearchFile_1.default)(lastPath);
    if (exist) {
        if (resize) {
            //should return image from resize folder
            res.send(`<img src=${`images/resize/${resized}`} />`);
        }
        else {
            //should resize image and save it in resize folder then return the image resized
            yield (0, ResizeImage_1.default)(existPath, lastPath, Number(width), Number(height)).then(() => {
                res.send(`<img src=${`images/resize/${resized}`} />`);
            }).catch(() => {
                const error = "Oops! image failed resize please try again";
                res.send(error);
            });
        }
    }
    else {
        const errorImage = "oops! image not found";
        return res.status(404).send(errorImage);
    }
});
exports.default = exports;
