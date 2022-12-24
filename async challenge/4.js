+(async function excuter() {
    try {
        await asyncFunc1();
        console.log("Async1 successed");
    } catch {   
        console.log("Async1 Failed");
    }

    try {
        await asyncFunc2();
        console.log("Async2 successed");
    } catch {
        console.log("Async2 Failed");
    }
})();