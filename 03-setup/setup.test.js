let animals = ["Elephant", "Monkey", "Girrafe", "Tiger"];

describe("animals array", () => {
  beforeEach(() => {
    animals = ["Elephant", "Monkey", "Girrafe", "Tiger"];
    console.log("Before each ");
  });
  //   afterEach(() => {
  //     animals = ["Elephant", "Monkey", "Girrafe", "Tiger"];
  //     console.log("After each ");
  //   });
  //   beforeAll(() => {
  //     console.log("Before All");
  //   });
  //   afterAll(() => {
  //     console.log("After All");
  //   });
  it("should add animal at the end of array", () => {
    animals.push("alligator");
    expect(animals[animals.length - 1]).toBe("alligator");
  });
  it("should add animal to the start of array", () => {
    animals.unshift("bear");
    expect(animals[0]).toBe("bear");
  });
  it("lenght should be 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it("truthy", () => {
    expect(true).toBeTruthy();
  });
});
