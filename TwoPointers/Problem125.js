var isPalindrome = function (s) {
  let sanitisedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  if (!sanitisedStr.length) {
    return true;
  }

  let left = 0;
  let right = sanitisedStr.length - 1;

  while (left < right) {
    if (sanitisedStr[left] === sanitisedStr[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
};
