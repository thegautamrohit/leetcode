// 2824. Count Pairs Whose Sum is Less than Target


// Given a 0-indexed integer array nums of length n and an integer target,
// return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

var countPairs = function (nums, target) {
  let arr = mergeSort(nums);
  let count = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] < target) {
      count += right - left;
      left++;
    } else right--;
  }

  return count;
};
