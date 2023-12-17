const user ={
    //properties
    username: "aniket",
    loginCount: 8,
    isLoggedIn: true,

    //methods
    getUserDetails: function(){
        console.log('got details from user');
        console.log(`username ${this.username}`);
    } 
}

// console.log(user.username);
// console.log(user.getUserDetails());

function users(username,loginCount,isLogIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogIn = isLogIn;

  
}

//new keyword is a constructor function
const userOne = new users("anni", 10, true)
const userTwo = new users("pandit", 20 , false)
console.log(userOne); 