// problem 21
// create a function to check armstrong number
// input: a number
// output: true, false
// example:
// 153 = (1 ^ 3) + (5 ^ 3) + (3 ^ 3) = 1 + 125 + 27 = 153 
// true

function checkArmStrongNumber(num) {
    const digit = String(num).split('');
    const power = digit.length;

    const total = digit.reduce((acc, curr) => acc + Number(curr) ** power, 0);

    console.log(total === num);
}

// checkArmStrongNumber(153);
// checkArmStrongNumber(467);
// checkArmStrongNumber(370);



// problem 22
// write a program that prints numbers from 1 to n,
// replacing
// multiples of 3 with 'Fizz'
// multiples of 5 with 'Buzz'
// multiples of both 3 & 5 with 'FizzBuzz'
// input: a positive number
// output:
// example: 20
// 1, 2 Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,
// 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz

function handleFizzBuzz(num) {
    let fizzBuzz = []
    for (let i = 1; i <= num; i++) {

        // approach 1 - else if
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzz.push('FizzBuzz')
        } else if (i % 3 === 0) {
            fizzBuzz.push('Fizz')
        } else if (i % 5 === 0) {
            fizzBuzz.push('Buzz')
        } else {
            fizzBuzz.push(i)
        }

        // approach 2 - switch
        // switch (true) {
        //     case i % 3 === 0 && i % 5 === 0:
        //         fizzBuzz.push('FizzBuzz')
        //         break;

        //     case i % 3 === 0:
        //         fizzBuzz.push('Fizz')
        //         break;

        //     case i % 5 === 0:
        //         fizzBuzz.push('Buzz')
        //         break;

        //     default: fizzBuzz.push(i)
        // }
    }
    console.log(fizzBuzz);
}

// handleFizzBuzz(20)
// handleFizzBuzz(36)



// Find the largest number in an array in JavaScript

function findLargest(arr) {
    //  return Math.max(...arr);

    let largestNumber = arr[0]
    for (i = 1; i < arr.length; i++) {
        if (largestNumber < arr[i]) {
            largestNumber = arr[i]
        }
    }
    return largestNumber
}

// console.log(findLargest([21, 555, 77, 999, 12]));
// console.log(findLargest([2113, 55, 7447, 949, 1122]));



// Write a Program to find a sum of an array

function sumArray(arr) {
    // let total = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     total += arr[i]
    // }
    // return total;

    return arr.reduce((acc, curr) => acc + curr, 0)
}

// console.log(sumArray([4, 8, 2, 4, 2, 30, 50]));



// Find the Union of Two Arrays
// merges two arrays then removes duplicates
// and returns the output as a new array.

function arrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(arrayUnion([1, 2, 3], [2, 3, 4]));
