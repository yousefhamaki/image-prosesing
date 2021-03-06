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
const sharp_1 = __importDefault(require("sharp"));
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ResizeImage = (existPath, lastPath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, sharp_1.default)(existPath)
        .resize({ width: Number(width), height: Number(height) })
        .toFile(lastPath)
        .then((data) => {
        return true;
    })
        .catch((err) => {
        return false;
    });
    return result;
});
it("expect resized to throw error", () => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield ResizeImage(`${__dirname}/../../../images/p2.jpg`, "images/resized/p2_250-40.png", 250, 40)).toBeFalse;
}));
it("expect resized width to equal (250)", () => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield yield ResizeImage("images/p2.jpg", "images/resized/p2_250-400.png", 251, 401)).toBeTrue;
}));
