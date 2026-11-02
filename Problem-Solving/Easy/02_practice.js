// problem 9
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



// problem 10
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