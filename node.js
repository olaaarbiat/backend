const express = require('express');
const app = express();

// Function to reverse a string word by word
function reverseString(str) {
    return str.split(' ').reverse().join(' ');
}

// Factorial function
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Fibonacci function
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

app.get('/', function(req, res) {
    res.send("Server is running.");
});

// Route to reverse a string word by word
// مسار لعكس سلسلة نصية حرفاً بحرف
app.get('/reverse-character/:string', function(req, res) {
    const inputString = req.params.string;
    const reversedString = inputString.split('').reverse().join('');
    res.send("the reserved word" + reversedString);
});


// Route to calculate factorial
app.get('/factorial/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const result = factorial(num);
    res.send("Factorial of " + num + " is " + result);
});

// Route to calculate multiplication table
app.get('/multiplication/:num', function(req, res) {
    const num = parseInt(req.params.num);
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} * ${i} = ${num * i}\n`;
    }
    res.send(result);
});

// Route to calculate Fibonacci
app.get('/fibonacci/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const result = fibonacci(num);
    res.send("The Fibonacci of " + num + " is " + result);
});

const server = app.listen(7070, function() {
    console.log("Server is listening on port 7070");
});
