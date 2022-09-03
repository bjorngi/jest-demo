import dayjs from "dayjs";

/**
 * @param numberArray Array of numbers
 * @returns Sum of array of numbers
 */
export const sumOfArray = (numberArray) =>
  numberArray.reduce((acc, cur) => {
    if (typeof cur === "number") {
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);

/**
 * Returns the date of tomorrow in format 2020-01-25
 */
export const dateOfTomorrow = () => {
  const today = dayjs();
  return today.add(1, "day").format("YYYY-MM-DD");
};

/**
 * @param statusToFilter takes array of strings to filter away
 *
 * @example
 * const data = [
 *   {
 *     status: 'wating'
 *   },
 *   {
 *     status: 'active'
 *   }
 * ]
 * data.filter(filterStatus(['wating']))
 */
export const filterStatus = (statusToFilter) => (obj) => {
  return !statusToFilter.includes(obj.status);
};

/**
 * @param firstName First mame, including middle names
 * @param lastName Last name
 *
 * @example
 * formatVisibleName("Bjørn", "Gilstad") => "B. Gilstad"
 * formatVisibleName("Joar Roger", "Andersen") => "J. R. Andersen"
 */
export const formatVisibleName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
