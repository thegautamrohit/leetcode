let str = "dvdf";

function longestSubstring(str) {
  let max = 0;
  let l = 0;
  let set = new Set();

  for (let r = 0; r < str.length; r++) {
    while (set.has(str[r])) {
      set.delete(str[l]);
      l++;
    }

    set.add(str[r]);
    max = Math.max(max, set.size);
  }
  return max;
}

console.log(longestSubstring(str));
