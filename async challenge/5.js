function asyncResolveFunc() {
    function resolver(resolve, reject) {
      resolve("Success");
    }
    return new Promise(resolver);
  }
  function asyncRejectFunc() {
    function resolver(resolve, reject) {
        resolve("Failure1");
    }
    return new Promise(resolver);
  }
  // driver code
  const promiseSuccess = asyncResolveFunc();
  const promiseFailure = asyncRejectFunc();
  // Succeeded promise .then executes first function passed as argument
  promiseSuccess.then(
    (successData) => {
      console.log(successData);
    },
    (successData) => {
      console.log(successData);
    }
  );
  // Failed promise .then executes second function passed as argument
  promiseFailure.then(
    (successData) => {
      console.log(successData);
    },
    (failureData) => {
      console.log(failureData);
    }
  );