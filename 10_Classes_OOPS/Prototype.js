// let myName ="aniket      "
// console.log(myName.truelength);  //truelength is user defined function


let myHeros = ['Thor', 'Captain America']

let heroPower ={
    Thor: "hammer",
    CaptainAmerica: "Shield",

    getThorPower: function(){
        console.log(`thor power is${this.Thor}`)
    }
}

Object.prototype.aniket = function(){
    console.log(`new marvel hero Aniket 🦸`);
}

Array.prototype.heyAniket =function(){
    console.log(`hey new hero`);
}

myHeros.aniket()
heroPower.aniket()

myHeros.heyAniket()
// heroPower.heyAniket() //error  sibling never share functions


//new example
//old syntax 
const user ={
    name:"person"
}
const teacher = {
    makevideo: true
}

const teachingSupport ={
    isAvailable:true
}

const TASupport={
    makeAssignment: 'js',
    fullTime: true,
    //linking teachingSupport to TASupport
    __proto__: teachingSupport
}
// we can link outside the object
teacher.__proto__=user



//modern syntax
Object.setPrototypeOf(teachingSupport, teacher)  //here teachingSUpport access all the properties of teacher



let anotherUName = "chaiorCode         "
String.prototype.truelength =function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUName.truelength()

let myName ="aniket      "
myName.truelength()

"aniket      ".truelength()