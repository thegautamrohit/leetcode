function twoSum(nums, target) {
  //   let newArr = [...arr];
  //   let sortedArr = arr.sort((a, b) => a - b);

  //   let left = 0;
  //   let right = sortedArr.length - 1;

  //   while (left < right) {
  //     if (sortedArr[left] + sortedArr[right] === target) {
  //       return [arr.indexOf(newArr[left]), arr.indexOf(newArr[right])];
  //     } else if (sortedArr[left] + sortedArr[right] < target) {
  //       left++;
  //     } else {
  //       right--;
  //     }
  //   }

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));
