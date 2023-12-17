class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    //getters and setters
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
       this._password = value.toUpperCase()
    }
}

const aniket = new User("a@nike.com", "abc")
console.log(aniket.email); 








//Object
const UserTwo ={
    _email: 'hc@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value 
    }
}

const tea = Object.create(UserTwo)
console.log(tea.email);