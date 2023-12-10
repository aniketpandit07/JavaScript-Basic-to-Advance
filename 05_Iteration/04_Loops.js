const myNum = [1,2,3,4,5,5,6,7,8,9]

//using map
const add10 = myNum.map((item)=>item + 10)
console.log(add10);

//chaining in Map
const newNums = myNum 
            .map((num)=> num*10)    //[10,20,30,40,.....]
            .map((num)=>num+1)      //[11,21.31,41,.....]
console.log(newNums);

//filter used in chaining map
const newNums2 = myNum 
            .map((num)=> num*10)    //[10,20,30,40,.....]
            .map((num)=>num+1)      //[11,21.31,41,.....]
            .filter((num)=>num>=40) //[41,51,61,.......]     
console.log(newNums2);


// +++++++ reduce() +++++++

//in the begining value of accumelator is 0 then it take the value from previous operation
const numArr = [1,2,4]

const total = numArr.reduce(function (accumelator, currentValue){
    console.log(`acc: ${accumelator} and currrval: ${currentValue}`);
    return accumelator + currentValue
},0) 
console.log(total);

//reduce using arrow function
const newTotal = numArr.reduce((acc,curval)=> acc + curval, 0)
console.log(newTotal);

//example
const shopCart = [
    {
        item: 'js',
        price: 1999
    },
    {
        item: 'py',
        price: 999
    },
    {
        item: 'cpp',
        price: 2999
    } 
]

const cartTotal = shopCart.reduce((acc, currentval)=> acc+currentval.price,0)
console.log(cartTotal);
