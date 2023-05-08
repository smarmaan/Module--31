/*Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.*/

const maximum = (a, b) => {
  const combine = [...a, ...b];
  return Math.max(...combine);
};

const a = [1, 2, 3, 4, 5];
const b = [10, 9, 8, 4, 5];

const c = maximum(a, b);
console.log(c);
