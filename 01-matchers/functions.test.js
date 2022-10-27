const functions = require("./functions");

// test("Add 2 + 2 to be equal 4", () => {
//   expect(functions.add(2, 2)).toBe(4);
// });
// test("Add 2 + 2 not to be equal 5", () => {
//   expect(functions.add(2, 2)).not.toBe(5);
// });

// // Check for truthy and falsy values
// // toBeNull matches only null
// // toBeUndefined matches only undefined
// // toBeTruthy matches anything that an if statement treats as true
// // toBeFalsy matches anything that an if statement treats as false

// // to be null
// test("Should be null", () => {
//   expect(functions.isNull()).toBeNull();
// });
// // to be falsy
// test("Should be falsy", () => {
//   expect(functions.checkValue(null)).toBeFalsy();
// });

// toEqual
// test("User should be Trived Jajala", () => {
//   expect(
//     functions.createUser().toEqual({ firstName: "Trived", lastName: "Jajala" })
//   );
// });

describe("example tests", () => {
  it("should add 1 + 2 equal to 3", () => {
    const result = functions.add(1, 2);
    expect(result).toBe(3);
  });
  it("object assignment", () => {
    const obj = {};
    expect(obj).toStrictEqual({});
  });
});
describe("truthy or falsy", () => {
  it("null", () => {
    const n = "";
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    // expect(n).not.toBeUndefined();
  });
});
describe("numbers", () => {
  const value = 2 + 3;
  it("two plus three", () => {
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(5);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(5);
  });

  it("adding floats", () => {
    const value = 0.2 + 0.1;
    expect(value).toBeCloseTo(0.3);
  });
});

describe("strings", () => {
  it("matching strings", () => {
    expect("hello").not.toMatch(/i/);
  });
});

describe("Arrays", () => {
  const shoppingList = ["milk", "toast", "bread", "boost"];
  expect(shoppingList).toContain("toast");
});
const compileAndroidCode = () => {
  throw new Error("You are using wrong SDK");
};
describe("expections", () => {
  it("exceptions", () => {
    expect(compileAndroidCode).toThrow("You are using wrong SDK");
  });
});
