const maxProfit = (arr) => {
  let result = 0;

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    let profit = arr[right] - arr[left];
    if (profit > 0) {
      result = Math.max(result, profit);
      right++;
    } else {
      left = right;
      right++;
    }
  }
  return result;
};

console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
