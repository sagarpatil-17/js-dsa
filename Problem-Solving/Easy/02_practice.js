// problem 8
// write a function that calculated and prints the sum of the digits of given number
// input: a number, positive integer -> 20, 12, 24, 11
// output: sum of all numbers
// example:
// 12: 1 + 2 = 3
// 47: 4 + 7 = 11
// 376: 3 + 7 + 6 = 16

function sum(num) {
    if (num < 0) return console.log('Enter a valid number');

    const numArr = String(num).split('');

    let total = 0;
    for (let i = 0; i < numArr.length; i++) {
        total += Number(numArr[i])
    }

    console.log(total);
}

// sum(33);



// problem 9
// write a function that generate and prints a multiplication table for a given number up to a specified range
// input: two positive numbers
// output:
// example:
// 4, 10 => 4, 8, 12...40
// 6, 3 => 6, 12, 18

function getTable(num, range) {
    if (num <= 0) return console.log('give a valid number');
    if (range <= 0) return console.log('give a valid range');

    for (let i = 1; i <= range; i++) {
        console.log(num * i);
    }
}

// getTable(8, 3)



// problem 10
// write a function that finds anf prints the maximum element in an array of numbers
// input: array of numbers
// output: biggest number
// example:
// [4, 6, 9, 1, 3] => 9
// [44, 111, 5, 12, 32] => 111

const biggestNumber = (arr) => {

    if (arr.length === 0) return console.log('give a valid array');

    // approach 1 
    // console.log((Math.max(...arr)));

    // approach 2
    // let maxValue = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     if (maxValue < arr[i]) {
    //         maxValue = arr[i];
    //     }
    // }
    // console.log(maxValue);

    // approach 3
    // let maxValue = arr[0];
    // for (let item of arr) {
    //     if (item > maxValue) {
    //         maxValue = item;
    //     }
    // }
    // console.log(maxValue);

    // approach 4
    // let maxValue = arr[0];
    // arr.forEach((item) => {
    //     if (item > maxValue) {
    //         maxValue = item
    //     }
    // })
    // console.log(maxValue);

    // approach 5
    const maxValue = arr.sort((a, b) => a - b);
    // console.log(maxValue.pop());
    // console.log(maxValue[maxValue.length - 1]);
    console.log(maxValue.at(-1));
}

// biggestNumber([44, 111, 5, 12, 32]);
// biggestNumber([444, 111, 588, 1298, 32]);



// problem 11
// write a function that checks if a string is palindrome or not
// input: a string
// output: true / false
// A palindrome is a word that reads the same backward or forward
// example:
// madam, level

function checkPalindrome(string) {

    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    string === reversedString ? console.log(true) : console.log(false)
}

// checkPalindrome('level')



// problem 12
// write a function that returns the results of raising a given number to a specified power
// input: two numbers => base , exponent
// output: base to power of exponent
// example:
// 2, 3 : 2*2*2 = 8

function findPowerOfNumber(base, exponent) {
    if (exponent < 0) {
        console.log('give a valid numbers');
    }

    let raisingValue = 1;
    for (let i = 1; i <= exponent; i++) {
        raisingValue = raisingValue * base
    }
    console.log(raisingValue);
}

// findPowerOfNumber(10, 3)
// findPowerOfNumber(5, 0)



// problem 13
// write a function that counts and prints the number of vowels and consonants in a given string
// input: string
// output: vowels and consonants count
// vowel: a e i o u
// consonants: all other character

function countVowelsAndConsonants(string) {
    let vowelsCount = 0;
    let consonantsCount = 0;

    const vowels = "aeiou";
    const consonants = "bcdfghhklmnpqrstvwxyz";


    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            vowelsCount++
        } else if (consonants.includes(string[i])) {
            consonantsCount++
        }
    }

    console.log(vowelsCount);
    console.log(consonantsCount);
}

// countVowelsAndConsonants('asdf efgbf nadnvkvmls dfduu');
// countVowelsAndConsonants('hello world');



// problem 14
// write a function that finds all the factors of a given  numbers
// input: number, positive integer
// output: factors of number
// example:
// 4: 1, 2, 4
// 8: 1, 2, 4, 8

function findFactors(num) {
    if (num < 0) return console.log('give a positive number');

    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }
    console.log(factors);
}

// findFactors(10)



// problem 15
// write a function that calculates and returns the average of a set of numbers
// input: array of positive integer numbers
// output: average of numbers
// Average: calculated by dividing the total of the values by the number of values
// example:
// [2, 4, 8, 6] => 5 

function calculateAverage(arr) {
    // approach 1
    // let total = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     total = total + arr[i]
    // }
    // const average = total / arr.length;
    // console.log(average);


    // approach 2
    // const average = arr.reduce((acc, curr) => {
    //     return acc + curr
    // }, 0) / arr.length

    // console.log(average);


    // approach 3
    let total = 0;
    arr.map((num) => {
        return total = total + num
    })
    const average = total / arr.length
    console.log(average)
}

calculateAverage([2, 4, 8, 6])
calculateAverage([12, 43, 85, 63, 86, 11])