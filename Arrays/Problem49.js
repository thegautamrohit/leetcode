function groupAnagrams(strs) {
  //   let obj = {};
  //   for (let str of strs) {
  //     let letters = str.split("").sort().join("");
  //     obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  //   }
  //   return Object.values(obj);

  let map = new Map();
  for (const item of strs) {
    let letter = item.split("").sort().join("");

    if (map.has(letter)) {
      map.set(letter, [...map.get(letter), item]);
    } else {
      map.set(letter, [item]);
    }
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
