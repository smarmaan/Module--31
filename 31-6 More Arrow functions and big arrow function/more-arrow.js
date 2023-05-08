const add = (first, second) => first + second;
const fullName = (Fname, Lname) => Fname + " " + Lname;
const multiply = (a, b) => a * b;

const result = multiply(10, 20);
console.log(result);



// no parameter arrow function
const getPie = () => 3.14;

// one parameter arrow function
// const doubleIt = (num) => num * 2;
// ~~~~~~~~~  OR  ~~~~~~~~~
// const FiveTimes = num => num * 5;



// Multi-line arrow function
//  if you want to return something we must use return...
const doMath = (a, b, c) => {
  const firstSum = a + b;
  const SecondSum = b + c;
  const multiplyResult = firstSum * SecondSum;
  const result = multiplyResult / 2;
  return result;
};








