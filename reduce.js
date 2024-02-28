  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
//----Like map and filter, we need to pass the reduce  method a callback function which will be executed  

//The signature of the callback function in  this case is a bit different from what you’ve  
// seen so far, because it takes two parameters  rather than one. The parameters the callback  
// function takes are typically called acc,  for accumulator, and curr for current value.  
// on each element of the array. 

let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc, //The accumulator represents the value that will  ultimately be returned from the reduce method.  
    //So here, the accumulator will be an integer because we’re calculating a sum, but we could also be accumulating items into an array, an object or something else.
    "Current Value:", curr, //current value, represents the current array  item that the callback function is being run on.  
    "Total:", acc + curr 
  );
  return acc + curr
}, 0); 
//the accumulator will default to the first element  in the array. In this case that element was zero,  
// and the accumulation process starts with  the second element in the array, so 1 is added to 0.
// However, if I explicitly specify  an initial value to use as the accumulator, then  
// the callback function will execute five times,  beginning with the first element of the array,  
// and using our explicit initial value as the  accumulator. As you can see, in this case that  
// gives us the same result
console.log(sum);

// In a practical sense,  
// using the initial value is a good way to add  more to a previously calculated subtotal,  
// add more items into an existing array, or inject  additional properties into an existing object. 

// Though it's technically optional, as an advanced  JavaScript developer you should always specify the  
// initial value to use for the accumulator in order  to be explicit with your intentions.

//single line
let sums = nums.reduce((acc, curr) => acc + curr, 10);
console.log(sums);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
