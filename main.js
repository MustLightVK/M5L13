//--------------------------------------task1
const array1 = [123, 456, 789, 234, 567];
const array2 = [345, 678, 987, 321, 654];

function sumArray (arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    let sum12 = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum1 = sum1 + arr1[i];
        sum2 = sum2 + arr2[i];
        sum12 = sum1 + sum2;
    }
    return sum12;
}

console.log(sumArray(array1, array2));
//--------------------------------------task2
let reverse = [1,2,3,4,5];
reverse = reverse.reverse();
console.log(reverse);
//--------------------------------------task3
const words = ['радар', 'анна', 'машина', 'шалаш', 'казан', 'варяг', 'потоп'];

function analys(x) {
    const palindromes = [];

    for (let i = 0; i < x.length; i++) {
        let reversedWords = x[i].split('').reverse().join('');
        
        if (x[i] === reversedWords) {
            palindromes.push(x[i]);
        }
    }

    return palindromes;
}

console.log(analys(words)); 
//--------------------------------------task4
const numbers = [42, 17, -5, 100, 0, 8, -23, -55, -7, 91];

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

console.log(findMax(numbers)); 
//--------------------------------------task5
function multiFunction(number) {
    let stringNumber = String(number); 
    stringNumber = stringNumber.split('');
    const result = [];

    for (let i = 0; i < stringNumber.length; i++) {
        result.push(stringNumber[i]); 

        if (stringNumber[i] % 2 !== 0 && stringNumber[i + 1] && stringNumber[i + 1] % 2 !== 0) {
            result.push(':');
        }
    }

    return result.join(''); 
}

console.log(multiFunction(87193201));
//--------------------------------------task6
const againtNumbers = [1, 2, 3, 4, 5, -1, -2, -3];

function filterNumbers(arr, functionCondition) {
    const filteredNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (functionCondition(arr[i])) {
            filteredNumbers.push(arr[i]);
        }
    }

    return filteredNumbers;
}

const even = (num) => num % 2 === 0;
const positive = (num) => num > 0;

console.log(filterNumbers(againtNumbers, even));
console.log(filterNumbers(againtNumbers, positive));


