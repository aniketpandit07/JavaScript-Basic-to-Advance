
//functions

function sayMyName(){
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("k");
    console.log("e");
    console.log("t");

}
sayMyName       //reference 
sayMyName()     //execution of function   [Function: sayMyName]
console.log(sayMyName);


// function addtwonos (num1, num2){
//     console.log(num1 +num2);
// }
// let resultt = addtwonos(3,undefined) 
// console.log(resultt);  

//method1
function addtwonos (num1, num2){
    let result = num1 + num2
   return result
}
let result = addtwonos(3,4) 
console.log(result); 

//method2
function addtwonos (num1, num2){
    return  num1 + num2
   
}
let result2 = addtwonos(3,4) 
console.log(result);  

//method3  A simple user login message program
function loginUsermsg (username){
    if(!username){
        console.log(`enter valid username`);
        return
    }
    return `${username} just logged in`
}
console.log(loginUsermsg(`Aniket `));


//function Advance
// ... rest operator used when we don't know how many parameter are there in function
//... is also used in spread operator
function calculateCartPrice(val1, val2, ...numb1){
    return numb1
}

console.log(calculateCartPrice(2,4,7,0,33,4,6));

//how to pass object in Function?
const user1 ={
    uname: "Aniket",
    price:4893
}

function handleObject(useForAnyObject){
    console.log(`username is ${useForAnyObject.uname}`);
}
handleObject(user1)


//how to pass arrays in Function?
 
const myArr =[344,546,864,34,343]

function returnsecond(getArray){
    return getArray[1]
}

console.log(returnsecond(myArr));

 