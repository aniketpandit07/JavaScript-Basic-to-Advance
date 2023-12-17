class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@g.com", "123")

chai.addCourse()

const tea = new User("Tea")
// tea.addCourse()  //error because User class don't have a access of Teacher class

tea.logMe()
 
chai.logMe()  //inherited access

console.log(chai === tea);   //false

console.log(chai instanceof Teacher); //true its a instance of teacher

console.log(tea instanceof User);  //true with same above reason

console.log(tea instanceof Teacher);  //false parent never instance of children

console.log(chai instanceof Teacher);  //true childs can be instance of parent

