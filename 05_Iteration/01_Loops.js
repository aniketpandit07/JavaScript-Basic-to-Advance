/*  1 for loop
    2 while loop
    3 do while loop */

// ++++++ For Loops ++++++++

// for (let index = 0; index <10; index++) {
//     const element =index
//     if(element ==5){
//         console.log("this is 5");
//     }
//     console.log(element);
    
// }


for (let i = 0; i < 10; i++) {
    
    for(let j = 1; j<10; j++){

        const element = i;
        console.log(element);
    }
    
}


// ++++++ for loop on array +++++++

let myarr = ['apple', 'samsung', 'xiaomi']

for(let i =0; i<myarr.length;i++){
    const element = myarr[i]
    console.log(element);
}

//++++++++ break and continue +++++++++++
for(let i = 1; i<10; i++){
    if(i==5){
        console.log("5 got");
       break
    }
    console.log(`${i}`);

}

for(let i = 1; i<10; i++){
    if(i==5){
        console.log("got");
       continue
    }
    console.log(`${i}`);

}

// ++++++++++ while loop  ++++++++++ 

let i =0
while (i<10) {
   console.log(`value is ${i}`); 
   i++;
}


//  ++++++++++  while loop on array ++++++++++ 

let arr =['hmmm', 'achha', 'thik', 'hai']
let a=0
while(a<arr.length){
    console.log(`value is ${arr[a]}`);
    a++
}


//  ++++++++++ do while loop ++++++++++ 
let score = 41
do {
    console.log(`score is ${score}`);
    score++
} while (score<10);


