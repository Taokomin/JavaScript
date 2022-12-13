const people = ["Aaron","Mel","John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee  = {
    FirstName: "Komin",
    lastName: "junta", 
};

function sayHello(person){
    console.log("Hello" + person.FirstName + " " + person.lastName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);