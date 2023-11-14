let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];

function maxSumInWindow(arr, k) {
  // let result = [];

  //   for (let i = 0; i <= arr.length - k; i++) {
  //     let max = arr[i];
  //     for (let j = 1; j < k; j++) {
  //       if (arr[i + j] > max) {
  //         max = arr[i + j];
  //       }
  //     }
  //     result.push(max);
  //   }
  //   return result;

  //   for (let i = 0; i <= arr.length - k; i++) {
  //     result.push(Math.max(...arr.slice(i, i + 3)));
  //   }

  //   return result;

  let sum = 0;

  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    sum = sum + (arr[i] - arr[i - k]);

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return sum;
}

console.log(maxSumInWindow(arr, 4));
