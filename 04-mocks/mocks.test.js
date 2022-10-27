const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return results.data;
};
const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
it("mock calls", () => {
  const mockedCallsBack = jest.fn((x) => x + 42);
  forEach([1, 2], mockedCallsBack);
  //   expect(mockedCallsBack.mock.calls.length).toBe(2);
  //   expect(mockedCallsBack.mock.calls[0][0]).toBe(1);
  expect(mockedCallsBack.mock.calls[1][0]).toBe(2);
});
it("mock call", () => {
  const mock = jest.fn();
  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("hello")
    .mockReturnValueOnce("");
  const results = mock();
  const results1 = mock();
  const results2 = mock();
  const results3 = mock();
  expect(results3).toBe("");
});

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Get milk",
    },
  });
  const results = await fetchData(1);
  expect(results.todo).toBe("Get milk");
});
