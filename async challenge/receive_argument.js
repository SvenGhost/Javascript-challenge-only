// Q. Create a function which receives a function as argument and executes it after 2 seconds

function callbackExecute(callback) {
    if (typeof callback === "function") {
        console.log("Execute after 2 seconds");
        setTimeout(() => {
            callback();
        }, 2000);
    } else {
        console.log("not function");
    }
}

function displayHello() {
    console.log("Hello ");
}

callbackExecute(displayHello);