let nums = [5, 8, 10, 10, 11, 24, 87];

// iterate through the nums array and return a new array
// only containeg values from nums that are greater than 10
let filteredNums = nums.filter((num) => num > 10);

console.log(filteredNums);

// filter syntax:
// arrayName.filter( (parameter) => SOME CONDITION TO CHECK)