//array
// Arrays are the object in javascript
//js arrays are resizable
//0 based indexing
//when u do copy operation it create SHALLOW COPY of that array
//SHALLOW COPY of an object is a copy whose properties share same reference 

const arr = [2,5,2,8,23, 'hello'];
console.log(typeof arr);
console.log(arr[3]);

const arr2 = new Array(34,7,345,456,3);
console.log(arr2[3]);

arr2.push(333);
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.unshift(1000);  //UNSHIFT == PUSH   unshift add element at first place and push also
console.log(arr2);

arr2.shift();        //SHIFT == POP    but shift remove first element whereas pop remove last element
console.log(arr2);

const newArr = arr2.join();
console.log(newArr);  
console.log(typeof newArr);  //Array become String type 

//+++++++++++ SLICE AND SPLICE ++++++++++++

console.log("A" ,arr);
const newArray = arr.slice(1,4);   //index 1 included and index 4 excluded
console.log("slice",newArray);   
console.log("B",arr);          //does not change original array

console.log("A", arr2);
const newArray2 = arr2.splice(1,4);    //index 1 included and index 4 also included
console.log("Splice",newArray2);
console.log("B",arr2);          //it change the original array and return remaining values




