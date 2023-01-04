let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];

const findCommon = (min, ...arrs) => [...new Set(arrs.flat())].filter(e => arrs.reduce((acc, cur) => acc + cur.includes(e), 0) >= min);
console.log(findCommon(2, values1, values2, values3));