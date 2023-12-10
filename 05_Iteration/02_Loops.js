/*  4 for of loop
    5 for in loop
    6 for each loop
    7 Map */


// ++++++++++ for of  ++++++++++ 
const arr =[1,3,5,676,8]

for (const num of arr) {
    console.log(num);
}


//prints all the elemnts one by one from variable
const greetings = 'hello world'
for(const greet of greetings){
    console.log(greet);
}

// ++++++++++ Map ++++++++++ 
//map is object and hold the unique value
const map = new Map()
map.set('MH','maharashtra')
map.set(`GJ`,`gujrat`)
map.set(`TN`,`Telangana`)
map.set(`TN`,`Telangana`)  //duplicate not allowed
console.log(map);



// ++++++++++  for of loop on Map ++++++++++ 

for(const key of map){
    console.log(key);
}                      // it gives whole array

console.log(typeof map);  //object



for(const [key, value] of map){
    console.log(key, `==>>`, value );
}                     // destructuring array

console.log(typeof map);    //object



//  ++++++++++ For of on object ++++++++++ 
//backticks not work in key of object

//object is not iterable in for of loop

// const myObject = {
//     'game1': `GTA`,
//     'game2': `NFS`,
//     'game3': `FROZA`,
//     'game': `VOLARANT`,
// }

// for(const [key,value] of myObject){
//     console.log(key, `==>>>`, value);
// }


// ++++++++++ for in ++++++++++ 

//we use for in loop for the object iteration
const myObj2 = {
    react: 'by Facebook',
    angular: 'by Google',
    swift: 'by Apple',
    typeScript: 'by Microsoft'
}

for (const keys in myObj2) {
    console.log(`key: ${keys} value: ${myObj2[keys]}`);
}
//or
for (const keys in myObj2) {
    console.log(keys, myObj2[keys]);
}

// ++++++++++  for in loop on the Array  ++++++++++ 
// in the for in loop it returns the keys and value of array
let langs = ['c', 'cpp', 'java', 'js']
for (const key in langs) {
    console.log(key, langs[key]);
}

//or we just print the value of an array
langs = ['c', 'cpp', 'java', 'js']
for (const key in langs) {
    console.log( langs[key]);
}



// ++++++++++  for each  ++++++++++ 

// in callback function we don't use function name

const eachArray = ['eena', 'meena', 'deeka']

eachArray.forEach  (function (items){
    console.log(items);
})

// ++++++++++ for each loop in arrow function ++++++++++ 
//it also give index also
eachArray.forEach((value,index)=>{
    console.log(value,index);
})


//it also work when you declare a function seperately and assign that function in a for each loop

function printME(itemss){
    console.log(itemss);
}

//just declare the function don't initilize it
eachArray.forEach(printME)


//  ++++++++++  for each on array of Object  ++++++++++ 

const arrObj = [
    {
        lang: 'js',
        level: 'Begineer'
    },
    {
        lang: 'cpp',
        level: 'intermediate'
    },
    {
        lang: 'java',
        level: 'expert'
    }
]

arrObj.forEach((item)=>{
    console.log(item.lang);
})