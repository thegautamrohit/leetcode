let s = "YazaAay";

function longestGoodString(s) {
  if (s.length < 2) return "";
  let dataSet = new Set(s);

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

    if (dataSet.has(el.toLowerCase()) && dataSet.has(el.toUpperCase())) {
      continue;
    } else {
      let prev = longestGoodString(s.substring(0, i));
      let next = longestGoodString(s.substring(i + 1));

      return prev.length >= next.length ? prev : next;
    }
  }
  return s;
}

console.log(longestGoodString(s));
