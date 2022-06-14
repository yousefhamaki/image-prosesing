"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SearchFile_1 = __importDefault(require("../app/traits/SearchFile"));
it("expect the function return (false)", () => {
    expect((0, SearchFile_1.default)("../../images/p8.jpg")).toBeFalse;
});
it("expect the function return (true)", () => {
    expect((0, SearchFile_1.default)("../../images/p2.jpg")).toBeTrue;
});
