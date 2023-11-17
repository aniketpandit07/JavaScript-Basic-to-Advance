//Control Flow

//if

if(!true){
    console.log("executed");
}else if(!true){
    console.log("Exe");
}


const score = 200;
if (score > 100){
    let power= "Fly"
    console.log(`user can ${power}`);
}

//shorthand property
const bal =1000;
if (bal >300) console.log("rich");

//switch
//without break keyword it execute other cases too. Except default
const month =3;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("enter valid number");
        break;


    }


//truthy and falsy values
//in truthy value we just assume the enterd value is true 
//when we dont have any value then it assume as a false value

const userEmail = ''

if(userEmail){
    console.log(`got an email ${userEmail}`);
}else{
    console.log(`donta have email`);
}


//FALSY VALUES: 0, -0, BigInt, '', "", undefined, NaN, null

//TRUTHY VALUES: " ", ' ', "0", "false", [], {}, function(){}, whichever values written in doble or single quotes is true even space also true in quotes


//Q How to check object is empty or not?
//Ans: Object.keys functon return the objects keys in the form array then apply .length property on that array to find length.
//if length is 0 then object is empty
const emptyObj ={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//some tricky js
//false == 0      it gives true
//false == ''     it gives true
//0 == ''         it gives true

//NULLISH COALESCING OPERATOR   (??): NULL UNDEFINED
//it check the returned value.
//it is designed to avoid null and undefined values occured in program
//if program or any API send the null or undefined value then it FALLBACK TO SAFE VALUE which is defined by the developer
//if first value is safe to use then program continues without fallback to explicetly defined safe value
let val1;
val1 = null ?? undefined
console.log(val1);      //undefined

val1 =null ?? 10
console.log(val1);      //10

val1 = 2343 ??undefined
console.log(val1);      //2343

val1 = 300 ??400
console.log(val1);      //here first value is safe then no need to fallback to defined safe value

//Ternary operator
// condition ? true : false 

const blackTea = 100
blackTea <=80 ? console.log("less than 80") : console.log("more than 80");