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
const ResizeImage_1 = __importDefault(require("../app/traits/ResizeImage"));
it("expect resized to be (true)", () => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield (0, ResizeImage_1.default)(`${__dirname}/../../../images/p2.jpg`, "images/resized/p2_250-40.png", 250, 40)).toBeFalse;
}));
it("expect resized to be (false)", () => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield (0, ResizeImage_1.default)("/images/p2", "images/resized/p2_250-400.png", 250, 400)).toBeFalse;
}));
