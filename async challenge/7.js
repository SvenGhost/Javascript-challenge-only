function asyncFunction () {
    function resolver(resolve, reject) {
        resolve("success");
    }

    return new Promise(resolver);
}

objPromise = asyncFunction();

objPromise.then(
    () => {
        console.log('resolve');
    },

    () => {
        console.log("reject");
    }
);