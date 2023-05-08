function myFunction() {
    console.log(this);
  }
  const myContext = { value: 'A' };
  const myContext2 = { value: 'abc' };
  myFunction.call(myContext);  // logs { value: 'A' }
  myFunction.apply(myContext);  // logs { value: 'A' }
  myFunction.apply(myContext2); // logs { value: 'abc' }
  function MyFunction() {
    console.log(this);
  }
  new MyFunction(); // logs an instance of MyFunction