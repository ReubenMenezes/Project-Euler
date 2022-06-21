function fibbonaci() {
  let fibbonaciNumbers = [1, 2];
  //  Generate our fibonacci numbers
  while (fibbonaciNumbers[fibbonaciNumbers.length - 1] < 4000000) {
    fibbonaciNumbers.push(
      fibbonaciNumbers[fibbonaciNumbers.length - 1] +
        fibbonaciNumbers[fibbonaciNumbers.length - 2]
    );
  }
  let sum = 0;
  //   Iterate through our fibbonaci numbers and add the ones that are even
  for (i of fibbonaciNumbers) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(fibbonaci());


// ANS = 4613732