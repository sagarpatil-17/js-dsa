// problem 1
// print sum two numbers

function sum(num1, num2) {
    console.log(num1 + num2);
}

// sum(10, 20);



// problem 2
// calculate and print area of rectangle 

function calculateRectangleArea(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error('length should not be 0 or less than 0')
    }

    if (width <= 0) {
        throw new Error('width should not be 0 or less than 0')
    }

    console.log(length * width)
}

// calculateRectangleArea(10, 5);
// calculateRectangleArea(10, -5);
// calculateRectangleArea(10, 0);



// problem 3
// write a function that tells you if a given number is even or odd

function handleNumber(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even!`)
    } else {
        console.log(`${num} is odd!`)
    }
}

// handleNumber(10)



// problem 4
// write a function that finds and prints the smallest number among three given numbers
// input: 3 numbers 
// return smallest number 

function smallestNumber(a, b, c) {
    // approach 1

    // const sn = Math.min(a, b, c)
    // console.log(sn);


    // approach 2

    // const nums = [a, b, c];
    // let n = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] < n) {
    //         n = nums[i]
    //     }
    // }

    // console.log(n)


    // approach 3

    let smallestNumber = a;

    if (smallestNumber > b) {
        smallestNumber = b;
    }

    if (smallestNumber > c) {
        smallestNumber = c;
    }

    // console.log(smallestNumber)
}

// smallestNumber(7, 10, 1)



// problem 5
// write a function that returns the reverse of a string
// input: a string 
// output: reversed string 

function reverseString(string) {
    // approach 1

    const reversed = string.split('').reverse().join('');
    console.log(reversed);


    // approach 2

    // let reversedString = '';
    // for (let i = string.length - 1; i >= 0; i--) {
    //     reversedString += string[i]
    // }
    // console.log(reversedString)
}

// reverseString('Sagar');
// reverseString('Sagar Patil');



// problem 6
// write a function that calculate factorial of a given number
// input: a number, positive integer ->0,1,4,7
// output: factorial of number
// factorial: multiplication of all the positive integers from 1 to a given number

function calculateFactorial(num) {
    if (num == 0) return 1;
    if (num < 0) return 'please enter a positive number';

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
    }

    console.log(factorial);

}

// calculateFactorial(5)



// problem 7
// write a function that tells provided year is leap year or not
// input: a number, positive integer -> 2000, 2001, 2004
// output: true if leap year, else false
// leap year : every 4th year is a leap year

function findLeapYear(year) {
    if (year < 0) return console.log('enter a valid year');

    if (year % 4 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

findLeapYear(2024)