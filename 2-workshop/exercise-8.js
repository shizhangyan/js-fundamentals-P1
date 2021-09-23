function exercise8() {
  // Exercise 8
  //
  // Write a program that will output the sum of all of the multiples of four
  // between 0 and 5000
  //
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  let sum = 0;
  let num = 0;
  while(num <= 5000)
  {
    if(num % 4 === 0)
    {
      sum += num;
    }
    num += 1;
  }
  console.log(`The sum is ${sum}`);
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-8

module.exports = exercise8;
