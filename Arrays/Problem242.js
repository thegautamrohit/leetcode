let s = "a";
let t = "ab";

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const frequency = (arr) => {
    return arr.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] = acc[curr] + 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  };

  let sFreq = frequency(s.split(""));
  let tFreq = frequency(t.split(""));

  let status = true;

  for (const key in tFreq) {
    console.log(sFreq[key], tFreq[key]);

    if (sFreq[key] !== tFreq[key]) {
      status = false;
      return status;
    }
  }

  return status;
};

console.log(isAnagram(s, t));
