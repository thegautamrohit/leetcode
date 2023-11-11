function threeSum(arr) {
  if (arr.length < 3) {
    return [];
  }

  let result = [];
  let nums = arr.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];

    if (i > 0 && a === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = a + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        result.push([a, nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
