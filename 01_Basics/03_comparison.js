console.log(2<3);  //true
console.log(2>3); //false
console.log("4"<3);  //false
console.log("4">3);  //true
console.log("4"<"2"); // false

console.log(null  > 0);  //false
console.log(null  < 0);  //false
console.log(null  == 0);  //false
console.log(null === 0); //false
console.log(null >= 0);  //true
console.log(null <= 0); //true

console.log(undefined > 0);  //false
console.log(undefined < 0);  //false
console.log(undefined == 0); //false
console.log(undefined === 0); //false
console.log(undefined == null); //true

//*******NOTES*******
//js automatically convert string into number
console.log("3"===3);  //false . strictly check value as well type. here value is same but type is different
console.log("3"==3);  //true .it just check value

const heros = ["Bhavesh Joshi" , "Minnal Murli", "ShaktiMaan"];
console.log(typeof heros);  //object
console.log(heros);  //[ 'Bhavesh Joshi', 'Minnal Murli', 'ShaktiMaan' ]
console.log(heros[0]);  //Bhavesh Joshi

let myObj ={
    name: "Aniket",
    age: 22,
    degree: "btech",
}

console.log(myObj);  //{ name: 'Aniket', age: 22, degree: 'btech' }
console.log(myObj.name);  //Aniket

