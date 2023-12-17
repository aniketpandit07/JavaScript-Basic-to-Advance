function multipleFive(num){
    return num*5;
}

multipleFive.power =2;

console.log((multipleFive(5))); //25
console.log(multipleFive.power);  //2
console.log(multipleFive.prototype); // {}

//defining custom function
function createUser(username, price){
    this.username = username
    this.price =price 
}

//put that function in prototype
createUser.prototype.increment  = function(){
    this.price++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}
//calling custom function
const chai = new createUser("chai", 30);
const tea = new createUser("tea", 300)

chai.printMe()
chai.increment()
chai.printMe()