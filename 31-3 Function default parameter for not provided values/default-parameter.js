// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(6, 7));

// function minus(num1, num2) {
//   const sub = num1 - num2;
//   return sub;
// }

// const sub = minus(10, false);

// console.log(sub);

// const sub1 = minus(10, true);

// console.log(sub1);

// const sub2 = minus(10, "true");

// console.log(sub2);

// const sum = add(10);

// /*  if it has 2 parameter but as an input user gives
// only one then by default the other input will be count as
// "undefined"
// */

// console.log(sum);

// function sum(first, second) {
//   console.log(first, second);
// //   if (second === undefined) {
// //     second = 0;
// //   }

//   second = second || 0;

//   const total = first + second;

//   return total;
// }

// const a = sum(10);
// console.log(a);








function sum(first = 0, second = 0) {
  console.log(first, second);
  const total = first + second;

  return total;
}

const a = sum(10, 20);
console.log(a);

const b = sum(40);
console.log(b);

const c = sum();
console.log(c);
