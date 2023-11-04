// 2160. Minimum Sum of Four Digit Number After Splitting Digits

// First we will convert the number into array with individual number as item
// and the we will sort the array and try to put the bigger number no at the tens place to get the smaller no

var minimumSum = function (num) {
  let arr = num.toString().split("");

  let sortedNum = arr.sort();

  return (
    parseInt(sortedNum[0] + sortedNum[2]) +
    parseInt(sortedNum[1] + sortedNum[3])
  );
};
