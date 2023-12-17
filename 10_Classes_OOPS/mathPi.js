console.log(Math.PI);  //3.141592653589793
Math.PI=5
console.log(Math.PI);  //3.141592653589793   never change const value




const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);


const chai ={
    name: 'ginger chai',
    price:250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, "name",{
    writable:false, 
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value  !== 'function'){

        console.log(`${key}, ${value}`);
    }
}