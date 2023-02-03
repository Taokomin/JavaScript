//move capital letters to the front
function highestDigit(n) {
  let highest = 0;
  n = n.toString().split('');
  n.forEach(function(digit) {
    if (parseInt(digit) > highest) {
      highest = parseInt(digit);
    }
  });
  return highest;
}
console.log(highestDigit(379)); // Output: 9
console.log(highestDigit(2)); // Output: 2
console.log(highestDigit(377401)); // Output: 7
