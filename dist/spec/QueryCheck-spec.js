"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheckQuery_1 = __importDefault(require("./../app/traits/CheckQuery"));
const required = { image: "required", width: "required|number", height: "required|number" };
it("expect the length of errors equal (1)", () => {
    const query = { width: "250", height: "256d", image: "p2" };
    expect((0, CheckQuery_1.default)(query, required).length).toEqual(1);
});
it("expect the length of errors equal (2)", () => {
    const query2 = { width: "250d", height: "256d", image: "p2" };
    expect((0, CheckQuery_1.default)(query2, required).length).toEqual(2);
});
it("expect the length of errors equal (2)", () => {
    const query3 = { width: "250", height: "256d" };
    expect((0, CheckQuery_1.default)(query3, required).length).toEqual(2);
});
it("expect the length of errors equal (3)", () => {
    const query4 = {};
    expect((0, CheckQuery_1.default)(query4, required).length).toEqual(3);
});
it("expect the length of errors equal (0)", () => {
    const query5 = { width: "250", height: "400", image: "p2" };
    expect((0, CheckQuery_1.default)(query5, required).length).toEqual(0);
});
