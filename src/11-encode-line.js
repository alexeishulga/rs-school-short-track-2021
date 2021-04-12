/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let count = 0;
  const arr = [];
  for (let i=0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    } else {
      if (count < 1) {
        arr.push(str[i]);
      } else {
        arr.push(`${count+1}${str[i]}`);
      }
      count = 0;
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
