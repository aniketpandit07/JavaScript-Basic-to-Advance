//in primitive datatypes pass by value happens
let myName = "Aniket";
let another = myName;
another = "pandit"
console.log(another);
console.log(myName);


//in non primitives datatypes pass by reference happens
let userOne = {
    name: "Anni",
    email: "anni@gmail.com"
}

let userTwo = userOne;

userTwo.email = "asdfsgvf";

console.log(userOne);