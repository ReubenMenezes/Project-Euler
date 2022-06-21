function largestPrimeFactor(number) {
  let primeFactors = [];
  // Start with the smallest prime number, 2
  let i = 2;
  while (i <= number) {
    if (number % i === 0) {
      primeFactors.push(i);
      number = number / i;
    } else {
      i++;
    }
  }
  return primeFactors[primeFactors.length - 1];
}
console.log(largestPrimeFactor(600851475143));


// ANS = 6857