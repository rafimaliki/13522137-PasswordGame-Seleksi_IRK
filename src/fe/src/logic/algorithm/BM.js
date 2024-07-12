// algoritma : https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2020-2021/Pencocokan-string-2021.pdf

const bmMatch = (text, pattern) => {
  const last = buildLast(pattern);
  const n = text.length;
  const m = pattern.length;
  let i = m - 1;

  if (i > n - 1) {
    return false;
  }

  let j = m - 1;

  do {
    if (pattern.charAt(j) === text.charAt(i)) {
      if (j === 0) {
        // console.log("Match found with BM");
        return true;
      } else {
        i--;
        j--;
      }
    } else {
      const lo = last.hasOwnProperty(text.charAt(i))
        ? last[text.charAt(i)]
        : -1;

      i = i + m - Math.min(j, 1 + lo);
      j = m - 1;
    }
  } while (i <= n - 1);

  return false;
};

const buildLast = (pattern) => {
  const last = {};
  const m = pattern.length;

  for (let i = 0; i < m; i++) {
    last[pattern.charAt(i)] = i;
  }

  return last;
};

export default bmMatch;
