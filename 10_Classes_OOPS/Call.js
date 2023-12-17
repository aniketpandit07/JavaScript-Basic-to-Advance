function setUsername(username){
    this.username= username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const aniket07= new createUser("aniket07", "aniaa2gmail.com", "abc123")
console.log(aniket07);