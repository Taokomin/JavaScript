//Remove Duplicates from an Array
function removeDups(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  console.log(removeDups([1, 0, 1, 0])) //output [1, 0]
  console.log(removeDups(["The", "big", "cat"])) //output ["The", "big", "cat"]
  console.log(removeDups(["John", "Taylor", "John"])) //output ["John", "Taylor"]