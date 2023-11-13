
const score = 400;
console.log(score);

const balance = new Number(399);  //explicetly we make it as a string or any datatype
console.log(balance);

console.log(balance.toString().length);  //it gives length of string or number
console.log(balance.toFixed(2));   //it gives value till 2 or defined precision

const otherNUMBER = 324.231;
console.log(otherNUMBER.toPrecision(4));

const hundreds = 10040;
console.log(hundreds.toLocaleString());  //American number reading 
console.log(hundreds.toLocaleString('en-In'));   //Indian number reading


// ++++++++++++++++  MATHS  ++++++++++++++++++

console.log(Math);
console.log(Math.abs(5*(-5)));  //abs always return positive values
console.log(Math.round(3.7));   //round of the values 
console.log(Math.ceil(3.1));   //round of value to higher number
console.log(Math.floor(3.9));  //round of the value to lower number
console.log(Math.min(3,6,25,77,1));  //takes multiple numbers and returns a minimun of them
console.log(Math.max(3,6,25,77,1));  //takes multiple numbers and returns a maximum of them

// console.log(Math.random());  //Everytime returns the random value
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

//for getting values in between desired range
// in this case we want values between the 10 and 20
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()* ((max-min) +1))+ min);