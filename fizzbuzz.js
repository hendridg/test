const fizzbuzz = (num) => {
  if (typeof num !== "number") {
    return "Error: the value is not a number";
  }
  if (num === 0) {
    return num;
  }

  const divisible = (num, divisor) => {
    if (num % divisor === 0) {
      return true;
    }
  };

  if (divisible(num, 3) && divisible(num, 5)) {
    return "fizzbuzz";
  }
  if (divisible(num, 3)) {
    return "fizz";
  }
  if (divisible(num, 5)) {
    return "buzz";
  }
  return num;
};

const sum = (a, b) => {
  return a + b;
};

const printNumber = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
    console.log("new stuff");
  }
};

//printNumber(30)

module.exports = { fizzbuzz, sum };
