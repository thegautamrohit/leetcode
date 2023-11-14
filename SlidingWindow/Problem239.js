// let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let arr = [1, 3, 1, 2, 0, 5];

function slidingWindowMax(arr, k) {
  let max = Math.max(...arr.slice(0, k));
  let result = [max];

  for (let i = k; i < arr.length; i++) {
    result.push(Math.max(arr[i], result[result.length - 1]));
  }

  return result;
}

console.log(slidingWindowMax(arr, 3));
