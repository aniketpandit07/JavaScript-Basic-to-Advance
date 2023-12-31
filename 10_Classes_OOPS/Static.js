class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    //when we dont to anyone access this method then use static
    static createId(){
        return `123`
    }
}

const Ani = new User('Ani')
// console.log(Ani.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email =email
    }
}

const iphone = new Teacher("iphone", 'i@p.com')
iphone.logMe()
// console.log(iphone.createId());?     //error