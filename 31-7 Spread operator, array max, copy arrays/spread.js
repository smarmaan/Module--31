const max = Math.max(12, 50, 489, 21, 17, 26, 8);
// Math.max --- value(number) gulo count kore ..
// array,object etc er vhitor max value ber korte pare na..
console.log(max);

const number = [12, 50, 489, 21, 17, 26, 8];
console.log(Math.max(number));
const largest = Math.max(...number);
console.log(...number);
/* spread operator use... array er sob gulo value ke alada kore
 count kore... ek ek ta sonkha ba number hisebe...*/
console.log(largest);

let number2 = number;
console.log(number);
console.log(number2);
number2.push(542);

//  ektay push korle 2tay chole jay.. same reference theke neoya tai

console.log(number2);
console.log(number);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let number3 = [number];
number3.push(325);
console.log(number3);
/* number nijei ekta array.. array er bahire r ekta array ache..
oitay push hobe kono value push korle...*/

let number4 = [...number];
number4.push(454);

/* spread diye number er sob gulo value ke alada kore neoya te 
oita r array thakbe na.. tai oitay value push korle.. main array 
tei deploy hobe... */

console.log(number4);



let number5 = [10,86,79,23,...number,38,32,11]
console.log(number5);


number5= [...number,10,86,79,23,38,32,11]
console.log(number5);