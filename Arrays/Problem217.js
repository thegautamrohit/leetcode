let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const checkDuplicate = (nums) => {
  //Approach - 1 start
  //   let occurence = nums.reduce((acc, curr) => {
  //     if (acc[curr]) {
  //       acc[curr] = acc[curr] + 1;
  //     } else {
  //       acc[curr] = 1;
  //     }
  //     return acc;
  //   }, {});
  //   let duplicate = false;
  //   for (const iterator in occurence) {
  //     if (occurence[iterator] > 1) {
  //       duplicate = true;
  //     }
  //   }
  //   return duplicate;
  // Approach -1 Ends

  // ----------------------------------------------------------------

  //Approach 2 starts

  let set = new Set(nums);

  if (nums.length === set.size) {
    return false;
  } else {
    return true;
  }
};

console.log(checkDuplicate(nums));
