function hasTargetSum(array, target) {
  let myNumbers = new Set();
  for (let number of array) {
    let difference = target - number;

    if (myNumbers.has(difference)) {
      return true;
    }
    myNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/*
  Add a written explanation of your solution here
  My Explanation: THe code above examines any pair of numbers in the array and tests to see if it adds up to the target number. If the summation meets this condition, it returns "true" in the terminal but "false" if it doesn't*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));

}

module.exports = hasTargetSum;
