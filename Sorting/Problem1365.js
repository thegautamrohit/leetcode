// How many number are smaller than the current number

// This can be solved using counting sort

const smallerNumbersThanCurrent = function (nums) {
  let max = Math.max(...nums);
  let counts = new Array(max + 1).fill(0);

  // Count the occurrences of each number.
  for (const num of nums) {
    counts[num]++;
  }

  console.log(counts);

  // Calculate the count of numbers smaller than or equal to each number.
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }

  console.log(nums, counts);

  // Initialize the result array.
  const result = [];

  // Populate the result array with counts of numbers smaller than the current number.
  for (const num of nums) {
    if (num === 0) {
      result.push(0);
    } else {
      result.push(counts[num - 1]);
    }
  }
  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
