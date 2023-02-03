// let values1 = ["Apple", 1, false];
// let values2 = ["Fries", 2, true];
// let values3 = ["Mars", 9, "Apple"];

// const findCommon = (min, ...arrs) => [...new Set(arrs.flat())].filter(e => arrs.reduce((acc, cur) => acc + cur.includes(e), 0) >= min);
// console.log(findCommon(values1, values2, values3));




function intersection(arr1, arr2) {
    var temp = [];
  
    for (var i in arr1) {
      var element = arr1[i];
  
      if (arr2.indexOf(element) > -1) {
        temp.push(element);
      }
    }
  
    return temp;
  }
  
  function multi_intersect() {
    var arrays = Array.prototype.slice.apply(arguments).slice(1);
    var temp = arguments[0];
  
    for (var i in arrays) {
      temp = intersection(arrays[i], temp);
  
      if (temp == []) {
        break;
      }
    }
  
    return temp;
  }
  
  var arr1 = ["Apple", 1, false];
  var arr2 = ["Fries", 2, true];
  var arr3 = ["Mars", 9, "Apple"];
  
  console.log(multi_intersect(arr1, arr2, arr3));

