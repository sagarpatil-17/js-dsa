// problem 16
// write a function that calculates and prints the simple interest on a loan amount
// input: principle amount, interest rate, time duration (how many years)
// output: interest amount
// simple interest: (principal * interest rate * time duration) / 100
// example:
// 1000, 5%, 1year = (1000*5*1)/100 = 50

function calculateInterest(principal, interest_rate, time_duration) {
    const interest = (principal * interest_rate * time_duration) / 100
    console.log(interest);
}

// calculateInterest(1000000, 8.5, 4)



// problem 17
// write a function that tells if the given number is prime or not
// input: a number
// output: true if prime else false
// prime number: a number that can only divided by itself or 1 without remainders
// example:
// 2, 3 ,5

function isPrimeNumber(num) {
    if (num <= 1) return console.log('input should be positive number');

    let isPrime = true;

    if (num === 2) {
        isPrime = true;
    }

    if (num % 2 === 0) {
        isPrime = false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break
        }
    }
    console.log(isPrime);
}

// isPrimeNumber(7);
// isPrimeNumber(8870);
// isPrimeNumber(7149)
// isPrimeNumber(89)



// problem 18
// write a function that counts and returns the number of words in a sentence
// input: a sentence
// output: number of words
// example:
// "this is a sentence" => 4

const countWordsFromSentence = (sentence) => {
    if (typeof sentence !== 'string') return console.log('input should be valid string');

    const words = sentence.split(' ').filter((word) => word !== '').length;
    console.log(words);
}

// countWordsFromSentence('hello  a     world!')
// countWordsFromSentence('this is a sentence')
// countWordsFromSentence('asdf qwerty xcvbn jkl tyuio fghk')



// problem 19
// write a function that converts a temperature in Celsius to Fahrenheit
// input: temperature in celsius
// output: temperature in Fahrenheit
// formula: (temp in degree Celsius * 9/5)+32
// example:
// 27 deg = (27 * 9.5)+32 =  80.6 Fahrenheit

function celsiusIntoFahrenheit(celsius) {
    if (celsius <= 0) return console.log('input should be valid number');

    const fahrenheit = (celsius * 9 / 5) + 32
    console.log(fahrenheit + ' Fahrenheit');
}

// celsiusIntoFahrenheit(33)



// problem 20
// write a program that swap two numbers
// input: two numbers a & b
// output: interchange the value of a & b
// example:
// a= 5, b=10 => a=10, b=5

let a = 5;
let b = 10;

// approach 1
// let c = a;
// a = b
// b = c

// approach 2
// [a, b] = [a, b].reverse();

// approach 3 
[a, b] = [b, a];

console.log(a, b)
