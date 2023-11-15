//objects part 2

const tinderUser = {}

tinderUser.id = '123abc';
tinderUser.name = 'Ani';
tinderUser.isLoggedIn = true;

console.log(tinderUser);

console.log(Object.keys(tinderUser));  //extracted keys from tinderUser

console.log(Object.values(tinderUser));  //extracted values from tinderUser

console.log(Object.entries(tinderUser));  //return each entry as a key and value in the form of array 

console.log(tinderUser.hasOwnProperty('name')); // return boolean value



const regularUser = {
    email: "ani@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Aniket",
            lastname:"Pandit"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname);


const obj1 ={1:"apple", 2:"Banana"}
const obj2 ={3:"Chickoo", 4:"Dalimb"}
const result1 = {obj1,obj2}
console.log(result1);

//by using assign
const result2 =Object.assign(obj1,obj2)
console.log(result2);

//by using spread operator
const result3 = {...obj1, ...obj2}
console.log(result3);


//destructuring in objects
const course = {
    coursename:"js hindi",
    price: "333",
    instructor:"HC",
    43534:452
}

//console.log(course.coursename);   //traditional
//console.log(course[43534]);   //better one new syntax
//console.log(course["price"]);   //better one



const {price: p} = course;  //destructuring
console.log(p);
console.log(typeof p);
 


