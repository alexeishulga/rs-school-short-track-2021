/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const symbol1 = s1.split('').sort();
  const symbol2 = s2.split('').sort();
  let count = 0;
  let i = 0; let
    j = 0;
  while (i < symbol1.length) {
    if (j === symbol2.length) break;
    if (symbol1[i] === symbol2[j]) {
      count++;
      i++;
      j++;
    } else if (symbol1[i] > symbol2[j]) {
      j++;
    } else { i++; }
  }
  return count;
}

module.exports = getCommonCharacterCount;
