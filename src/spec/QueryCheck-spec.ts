import QueryCheck from "./../app/traits/CheckQuery";

const required = {
  image: "required",
  width: "required|number",
  height: "required|number",
};

it("expect the length of errors equal (1)", () => {
  const query = { width: "250", height: "256d", image: "p2" };
  expect(QueryCheck(query, required).length).toEqual(1);
});

it("expect the length of errors equal (2)", () => {
  const query2 = { width: "250d", height: "256d", image: "p2" };
  expect(QueryCheck(query2, required).length).toEqual(2);
});

it("expect the length of errors equal (2)", () => {
  const query3 = { width: "250", height: "256d" };
  expect(QueryCheck(query3, required).length).toEqual(2);
});

it("expect the length of errors equal (3)", () => {
  const query4 = {};
  expect(QueryCheck(query4, required).length).toEqual(3);
});

it("expect the length of errors equal (0)", () => {
  const query5 = { width: "250", height: "400", image: "p2" };
  expect(QueryCheck(query5, required).length).toEqual(0);
});