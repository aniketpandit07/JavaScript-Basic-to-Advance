const user = {
    username: "Aniket",
    price: 384,
    welcomeMsg : function(){
        console.log(`${this.username} welcome to India`);
        console.log(this);   //this prints the current context
    }
}

user.welcomeMsg()
user.username ="Pandit"
user.welcomeMsg()
console.log(this);

//`this` in a function
// function hello(){
//     let uname ="aaaaa"
//     console.log(this.uname);  //not work in functons
// }
// hello()

// `this` in function stored in variable
const chai = function(){
    let uname = "aaaaa"
    console.log(this.uname);
}
chai()


// Arrow function
// const chaii =() =>{
//     let username = "Aniket"
//     console.log(this.username);
// }
// chai()

const addtwo =(num1, num2)=>{
    return num1 +num2     //when you write return keyword then use curly braces
}
console.log(addtwo(3,5));

//implicite return 
const addthree =(num1, num2, num3) => (num1+num2+num3)  //if don't write return keyword then declare it in paranthesis
  
console.log(addthree(3,5,4));

//when u write objects then it must to declare it in paranthesis
const addobj =(num1,num2) =>({username: "aniket"})
console.log(addobj(3,4));
