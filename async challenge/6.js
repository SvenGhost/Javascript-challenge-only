function setTimeoutPromise(delay) {
    function resolver(resolve) {
      setTimeout(resolve, delay);
    }
    return new Promise(resolver);
  }
  // driver code
  console.log("Task started");
  const timeoutPromise = setTimeoutPromise(3000);
  timeoutPromise.then(() => {
    console.log("Task completed");
  })
  .then(() => {
    console.log("second task completed");
  });