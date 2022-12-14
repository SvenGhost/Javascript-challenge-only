// ### Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

const num1 = 1, num2 = 10;

let i = num1;

const intervalId = setInterval(() => {
    console.log(i++);
    if (i === num2 + 1) 
        clearInterval(intervalId);
}, 1000);