// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const array = [1, 2, 3, 4, 5];

const avgOfSquaredElements = (array) => {
  const squaredElements = array.map((x) => x ** 2);

  const sum = squaredElements.reduce((x, y) => x + y, 0);

  const averageOfSum = sum / squaredElements.length;

  console.log(averageOfSum);
};

const a = avgOfSquaredElements(array);
