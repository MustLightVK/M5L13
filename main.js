//--------------------------------------task1
const array1 = [123, 456, 789, 234, 567, 777, 1069];
const array2 = [345, 678, 987, 321, 654];

function sumArray (arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let count = 0; count < arr1.length; count++) {
        sum1 = sum1 + arr1[count];
    }

    for (let count = 0; count < arr2.length; count++) {
        sum2 = sum2 + arr2[count];
    }

    return sum1 + sum2;
}

console.log(sumArray(array1, array2));
//--------------------------------------task2
let array = [1,2,3,4,5];
array = array.reverse();
console.log(array);
//--------------------------------------task3
const words = ['радар', 'анна', 'машина', 'шалаш', 'казан', 'варяг', 'потоп'];

function findPalindromes(x) {
    const palindromes = [];

    for (let count = 0; count < x.length; count++) {
        let reversedWords = x[count].split('').reverse().join('');
        
        if (x[count] === reversedWords) {
            palindromes.push(x[count]);
        }
    }

    return palindromes;
}

console.log(findPalindromes(words)); 
//--------------------------------------task4
const numbers = [42, 17, -5, 100, 0, 8, -23, -55, -7, 91];

function findMax(arr) {
    let max = arr[0];

    for (let count = 1; count < arr.length; count++) {
        if (arr[count] > max) {
            max = arr[count]; 
        }
    }
    return max;
}

console.log(findMax(numbers)); 
//--------------------------------------task5
function splittingNumber(number) {
    let stringNumber = String(number); 
    stringNumber = stringNumber.split('');
    const result = [];

    for (let count = 0; count < stringNumber.length; count++) {
        result.push(stringNumber[count]); 

        if (stringNumber[count] % 2 !== 0 && stringNumber[count + 1] && stringNumber[count + 1] % 2 !== 0) {
            result.push(':');
        }
    }

    return result.join(''); 
}

console.log(splittingNumber(87193201));
//--------------------------------------task6
const againtNumbers = [1, 2, 3, 4, 5, -1, -2, -3];

function filterNumbers(arr, functionCondition) {
    const filteredNumbers = [];

    for (let count = 0; count < arr.length; count++) {
        if (functionCondition(arr[count])) {
            filteredNumbers.push(arr[count]);
        }
    }

    return filteredNumbers;
}

const even = (num) => num % 2 === 0;
const positive = (num) => num > 0;

console.log(filterNumbers(againtNumbers, even));
console.log(filterNumbers(againtNumbers, positive));


