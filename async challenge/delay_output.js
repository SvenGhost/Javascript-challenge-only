// Print "Hello world" with a delay of 3 seconds.

// setTimeout(console.log, 3000, "Hello world");

setTimeout(() => console.log("Hello world"), 3000);

setTimeout(function(text) {console.log(text)}, 3000, "Hi");