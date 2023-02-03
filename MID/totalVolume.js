//total voiume of all box
function totalVolume(...boxes) {
    let totalVolume = 0;
    boxes.forEach(box => {
      totalVolume += box[0] * box[1] * box[2];
    });
    return totalVolume;
  }
  console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // Output: 63
  console.log(totalVolume([2, 2, 2], [2, 1, 1])); // Output: 10
  console.log(totalVolume([1, 1, 1])); // Output: 1
  