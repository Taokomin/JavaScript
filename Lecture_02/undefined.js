function testUndefined (U){
    if (U === undefined){
    return console.log("Undefined value!");
    }
    return console.log(U);
}

let numBer;
let str = "12345";

testUndefined(numBer);
testUndefined(str);
