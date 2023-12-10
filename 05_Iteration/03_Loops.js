//for each example
const coding =[2,3,4,6,8,9]

const values = coding.forEach((item) => {
    return item
});
//console.log(values);  //undefined   for each loop doesn't return anything


// ++++++++ filter() ++++++++
//filter method return the values based on condition
const myNums =[33,676,99,43,24,6,8,9,65]

let newNum =myNums.filter((num) => num>30)
console.log(newNum);


//when you use curly braces or open scope then return is MUST
let num2 = myNums.filter((num) => {
    return num>50
})
 console.log(num2);       //[ 676, 99, 65 ]



 //above filter example using for each operarion
//1 create an empty array
const newNums = []

//2apply for each method on previously defined array
myNums.forEach((num)=>{
    //3apply condition to filter it out
    if(num>50){
        //4 assign filtered value in an empty array
        newNums.push(num)
    }
})
//5 print it out
console.log(newNums);          //[ 676, 99, 65 ]



const books = [
    {
        title: 'Rich dad Poor dad', 
        genre: 'Finance',
        price: 299
    },
    {
        title: 'Think like a Monk', 
        genre: 'SelfHelp',
        price: 179
    },
    {
        title: 'Da vinci Code', 
        genre: 'Sci-fi',
        price: 499
    },
    {
        title: 'The Alchemist', 
        genre: 'SelfHelp',
        price: 299
    },
    {
        title: 'Wnings of Fire', 
        genre: 'Biography',
        price: 499
    },
    {
        title: 'Psychology of Money', 
        genre: 'Finance',
        price: 250
    },
    {
        title: 'Revolution 2020', 
        genre: 'Fiction',
        price: 150
    }
]

//applying filter on books where it returns the finance books
let userBooks = books.filter((bk)=> bk.genre=='Finance')
console.log(userBooks);

//return books finance and price is more than 100
userBooks = books.filter((bk)=>bk.genre =='Finance' && bk.price>=100)

console.log(userBooks);






