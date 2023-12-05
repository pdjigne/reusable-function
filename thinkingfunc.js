// Part 1: Thinking Functionally

// Sum of Numbers:
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
// Average of Numbers:
function averageArray(numbers) {
  const sum = numbers.reduce((sum, num) => sum + num, 0);
  return sum / numbers.length;
}
// Longest String

function longestString(strings) {
  let longest = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}
// Strings Longer than a Given Length

function stringsLongerThan(strings, length) {
  return strings.filter((str) => str.length > length);
}

