const marvel = ["Ironman", "Spiderman", "Thor", "Loki"];
const dc = ["Batman", "Superman", "Flash", "Aquaman"];


//push()
//marvel.push(dc);
//console.log(marvel);  //push operation gives the array within the array i original array
//console.log(marvel[4][2]);  //4th index is array itself in that array 2nd index element is Flash


//concat()
allHeros = marvel.concat(dc);
console.log(allHeros);  //it concat the both array and store in a new array
console.log(marvel);    //marvel array is not changed beacuse concat store all combined arrays in new array


//+++++ SPREAD ... +++++
const newHeros = [...marvel, ...dc];
console.log("newheros ",newHeros);     //spread returns concated array in the new array, its easy to use because we can add multiple array using ...array_name
 

//flat()
const arrINArray = [1,2,3,[4,5,6,[7,8]],9,0];
//console.log(arrINArray);
//console.log(arrINArray.flat()); //it returns some level of arry within array
console.log(arrINArray.flat(Infinity));  //it solve all the aray within array and return in a single array
console.log(arrINArray);


 //Array.isArray()
console.log(Array.isArray("Aniket"));  //booolean value return


//Array.from()
console.log( Array.from("Aniket pandit"));  //create array
console.log(typeof Array.from("Aniket"));  //object type
console.log(Array.from({name: 'Aniketp'}));  //it gives empty array  because Array.from method not able to create objects array directly. we have to specify on which basis we want to create array. whether based on key or values


//Array.of()
let a= 100
let b = 200
let c= 300
console.log(Array.of(a,b,c));