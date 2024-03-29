//number split
function numberSplit(n) {
    if (n === 0) return [0, 0];
    let split = Math.ceil(n / 2);
    return [Math.min(split, n - split), Math.max(split, n - split)];
  }
  console.log(numberSplit(4)); // Output: [2, 2]
  console.log(numberSplit(10)); // Output: [5, 5]
  console.log(numberSplit(11)); // Output: [5, 6]
  console.log(numberSplit(-9)); // Output: [-5, -4]
  