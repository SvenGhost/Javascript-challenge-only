
// ### Q. Print numbers from 10 to 1 with delay of 1 second between each value being printed using setTimeout using pre ES6 features only

// var num1 = 10, num2 = 1;

// for (var i = num1; i >= num2; i--) {
//    setTimeout(console.log, (num1 - i) * 1000, i);
// }

var num1 = 10, num2 = 1;
for (var i = num1; i >= num2; i--) {
    (function (i) {
        setTimeout(function() { console.log(i); }, (num1 - i) * 1000);
    })(i);
}