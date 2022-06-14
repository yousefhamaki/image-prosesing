import SearchFile from "../app/traits/SearchFile";

it("expect the function return (false)", () => {
  expect(SearchFile("../../images/p8.jpg")).toBeFalse;
});

it("expect the function return (true)", () => {
  expect(SearchFile("../../images/p2.jpg")).toBeTrue;
});
