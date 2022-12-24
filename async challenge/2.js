const num1 = 1, num2 = 10;
function displayWithDelay(i){
    console.log(i);
    if(i !== num2)
        setTimeout(displayWithDelay, 1000, ++i);
}(1);