function sumOfNums(range) {
  let sum = [];
  for (let i = 0; i < range; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum.push(i);
    }
  }
  return sum.reduce((a, b) => a + b);
}
console.log(sumOfNums(1000));


// ANS = 233168