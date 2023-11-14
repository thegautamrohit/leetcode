const maxProfit = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      console.log(arr[j] - arr[i]);
      result = Math.max(result, arr[j] - arr[i]);
    }
  }

  return result;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
