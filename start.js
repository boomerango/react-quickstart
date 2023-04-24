function printString(n) {
  let timeLeft = n;
  const intervalId = setInterval(() => {
    console.log("tik tok");
    timeLeft -= 1000;
    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Example usage:
printString(20*60*1000); // Prints "Hello, world!" every second for 5 seconds