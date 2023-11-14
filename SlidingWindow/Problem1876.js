let str = "aababcabc";

function countGoodSubstrings(str) {
  let results = 0;

  for (let index = 0; index < str.length; index++) {
    let subStr = str.slice(index, index + 3);
    let set = new Set(subStr);
    set.size === 3 && results++;
  }
  return results;
}

console.log(countGoodSubstrings(str));
