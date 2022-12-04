// ### Q. Print numbers from 1 to 10 with delay of 1 second between each value being printed

// let num1 = 1, num2 = 10;

// for (let i = num1; i <= num2; i++) {
//     setTimeout(() => console.log(i), i*1000);
// }

const num1 = 1, num2 = 10;
+function displayWithDelay(i){
    console.log(i);
    if(i !== num2)
        setTimeout(displayWithDelay, 1000, ++i);
}(num1);