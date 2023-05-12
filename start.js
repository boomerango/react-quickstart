const arg = proccess.argv.slice(2)

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
const num = parseInt(arg[0])
if( Number.isInteger(num)){
    printString(num*60*1000); // Prints "Hello, world!" every second for 5 seconds
} else{
 printString(2*60*1000);
}


