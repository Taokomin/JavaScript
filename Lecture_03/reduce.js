const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arrayOfNumbers.reduce((accumulator , currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);