// algoritma : https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2020-2021/Pencocokan-string-2021.pdf

const kmpMatch = (text, pattern) => {
  var n = text.length;
  var m = pattern.length;
  var b = computeBorder(pattern);

  var i = 0;
  var j = 0;

  while (i < n) {
    if (pattern.charAt(j) == text.charAt(i)) {
      if (j == m - 1) {
        // console.log("Match found with KMP");
        // console.log(i - m + 1);
        return i - m + 1;
      }
      i++;
      j++;
    } else if (j > 0) {
      j = b[j - 1];
    } else {
      i++;
    }
  }
  return -1;
};

const computeBorder = (pattern) => {
  const b = new Array(pattern.length).fill(0);
  b[0] = 0;

  var m = pattern.length;
  var j = 0;
  var i = 1;

  while (i < m) {
    if (pattern.charAt(j) === pattern.charAt(i)) {
      b[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = b[j - 1];
    } else {
      b[i] = 0;
      i++;
    }
  }

  return b;
};

export default kmpMatch;
