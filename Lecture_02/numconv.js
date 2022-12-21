let num1 = '150';
let flo1 = '1.50';

console.log("--------Convert Str to Int--------");

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xf'));

console.log("--------Convert Str to Flo--------");

console.log(parseFloat('1.25abc'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log("--------More Convert Exp--------");

console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

console.log(parseInt(`${1 + 1}`));

console.log("--------Convert Num to Str--------");

console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
