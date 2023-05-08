/*

1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.

*/

const multiply = (x, y, z) => x * y * z;

const a = multiply(10, 20, 30);

console.log(a);

/*

2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani.

*/

const fullSentence = `I am a web developer.
I love to code. 
I love to eat biryani.`;

console.log(fullSentence);

/*

3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result.

*/

const sum = (x, y = 10) => x + y;

const add = sum(10);

console.log(add);








