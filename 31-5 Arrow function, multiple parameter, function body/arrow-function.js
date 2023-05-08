const a = 59;
const b = 30;

function add(num1, num2) {
  const total = num1 + num2;
  return total;
}
console.log(add(a, b));

console.log(add(a, 53));

console.log(add(a));

// function expressions....
const sum = function add(num1, num2) {
  const total = num1 + num2;
  return total;
};
console.log(sum(a, b));

/* function expressions with 
             anonymous function....*/

const sum1 = function (num1, num2) {
  const total = num1 + num2;
  return total;
};
console.log(sum1(53, b));





const sub1 = function sub(num1, num2) {
  return num1 - num2;
};

function sub(num1, num2) {
  return num1 - num2;
}

const sub2 = (num1, num2) => num1 - num2;


