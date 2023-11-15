//Objects
// Objects can be made by 2 methods 
//by using literals and by using Constructors {singleton} Object.create


//declaring symbol
const mySymbol = Symbol("Key1");


const jsUser ={
    name: "aniket",
    surname: "pandit",
    "fullName": "aniketPandit",
    [mySymbol]:"Key1",
    year: 2023,
    location:"Beed",
    genderIsMale: true,
    language:["Marathi", "Hindi", "English"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["fullName"]); 
console.log(jsUser[mySymbol]);
console.log(typeof mySymbol);

//Object.freeze(jsUser);    //it freezes the value
console.log(jsUser);


jsUser.greetings = function(){
    console.log("Hey i'm learning JS")
}
jsUser.greetings2 = function(){
    console.log(`Hey ${this.fullName} learning JS `)
}
console.log(jsUser.greetings());  //Hey i'm learning JS
console.log(jsUser.greetings);   //[Function (anonymous)]
console.log(jsUser.greetings2());  //Hey aniketPandit learning JS
