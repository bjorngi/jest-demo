import {
  sumOfArray,
  dateOfTomorrow,
  filterStatus,
  formatVisibleName,
} from "./utils";

describe("sumOfArray", () => {
  it("should sum array of numbers and get 10", () => {
    const testData = [1, 2, 3, 4];

    const actual = sumOfArray(testData);

    expect(actual).toBe(10);
  });

  //  it("should ignore data other then numbers", () => {
  //    const testData = [1, 2, "data", 3, undefined, 4, null];
  //    const actual = sumOfArray(testData);
  //
  //    expect(actual).toBe(10);
  //  });
});

describe("dateOfTomorrow", () => {
  jest.useFakeTimers().setSystemTime(new Date("2022-01-01"));

  it("should show tomorrows date", () => {
    const actual = dateOfTomorrow();
    const expected = "2022-01-02";
    expect(actual).toBe(expected);
  });
});

describe("filterStatus", () => {
  const testData = [
    {
      id: 1,
      name: "John",
      status: "waiting",
    },
    {
      id: 2,
      name: "Fredric",
      status: "done",
    },
    {
      id: 3,
      name: "Alex",
      status: "waiting",
    },
  ];
  it("should filter away status 'done'", () => {
    const expectedIdsLeft = [1, 3];

    const output = testData.filter(filterStatus(["done"]));

    const actualIdsLeft = output.map((c) => c.id);

    expect(actualIdsLeft).toStrictEqual(expectedIdsLeft);
  });
});

describe("formatVisibleName", () => {
  it("should format name Bjørn Gilstad to B. Gilstad", () => {
    const actual = formatVisibleName("Bjørn", "Gilstad");
    const expected = "B. Gilstad";

    expect(actual).toBe(expected);
  });

  it("should format name 'Joar Roger Andersen' to 'J. R. Andersen'", () => {
    const actual = formatVisibleName("Joar Roger", "Andersen");
    const expected = "J. R. Andersen";

    expect(actual).toBe(expected);
  });
});
