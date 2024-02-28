  
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
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // we need to dive into it using dot notation  to get the yrsExperience. 
// The only real difference is that each time the  callback function executes, it’s executing on  
// an object now instead of an individual number, so instead of adding the element itself.
console.log(totalExperience);

// Without specifying the initial value (0),  
// the accumulator starts out as the first element  in the array which in this case is an object.  
// Then, JavaScript faithfully does what we told it to, it  attempts to add curr.yrsExperience to this object.  
// Now it’s trying to add an object and an integer  together, which results in us ending up with  
// this weird object/string/integer hybrid, and this  code is just all sorts of broken. So once again,  
// make sure to always specify the initial  value you want to use for the accumulator. 


// Grouping by a property, and totaling it too
//{Developer: 12, Designer: 4} <---This is what we what
let experienceByProfession = teamMembers.reduce((acc, curr) => {
//boundary of the call back function
  let key = curr.profession;
  if (!acc[key]) { //check whether the key already exists in the object we’re going to be accumulating into.
    acc[key] = curr.yrsExperience; //  If it doesn’t yet exist, I’ll set it equal to curr.yrsExperience. This means the first time  we see a new profession, that property will be added into the accumulator and its value  will be set to the team member’s experience.  
  }else {
    acc[key] += curr.yrsExperience; //Otherwise, if the key does already exist, it’s as  simple as adding the current member’s experience to the already existing value
  }
  return acc; //When I’m done, all  I’ve got to do is return the accumulator.
}, {});// ', {}'initial value, an empty object

console.log(experienceByProfession);

// The great thing about the reduce method  is its versatility. For example, watch  
// what happens when I add another team member  with a different profession to the array. 
// I can run the code again and the  result already has a new category  
// with the relevant years of experience.