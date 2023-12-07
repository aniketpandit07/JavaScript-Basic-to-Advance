//Dates
let myDate = new Date();  //object created
console.log(myDate);  //2023-11-13T15:36:18.253Z
console.log(typeof myDate);  //Date is a OBJECT type
console.log(myDate.toString());   //Mon Nov 13 2023 21:08:02 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());  //13/11/2023
console.log(myDate.toLocaleString());    //13/11/2023, 9:09:02 pm

//in date, month indexing starting from 0 
let myCreatedDATE = new Date(2023,0,6);
console.log(myCreatedDATE);    //2023-01-05T18:30:00.000Z
console.log(myCreatedDATE.toString());       //Fri Jan 06 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(myCreatedDATE.toDateString());       //Fri Jan 06 2023
console.log(myCreatedDATE.toLocaleString());        //6/1/2023, 12:00:00 am
console.log(myCreatedDATE.toLocaleDateString());       //6/1/2023
console.log(myCreatedDATE.getTime());   //1699890588285  this is time from 1 jan 1970 to till 6 jan 2023. this is milisecond


let myTimestamp = Date.now();
console.log(myTimestamp);    //1699890588285  this is the time in milisecond from 1 january 1970 to till now today
console.log(Math.floor(myTimestamp/1000));   //1699890943  this is time in seconds from 1 jan 1970 to till today

let date = new Date()
console.log(date.toLocaleTimeString());



