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