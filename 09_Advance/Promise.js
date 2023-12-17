//promises in js
 //+++++ Promise 01 +++++
const promiseOne = new Promise(function (resolve, reject) {
  //do some async task
  //db calls, cryptography, network
  setTimeout(function () {
    console.log("async task 1");
    resolve();
  }, 1000);
});

//then == resolve
promiseOne.then(function () {
  console.log("promise consumed");
});

 //+++++ Promise 02 +++++
// we can directly use promise, no need to keep it in a variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

 //+++++ Promise 03 +++++
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 3");
    resolve({ username: "Anni", email: "anni@gmail.com" });
  }, 1000);
});

promiseThree.then(function(user){ 
  console.log(user);
})

 //+++++ Promise 04 +++++
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "anni", password: "123abc" });
    } else {
      reject("Error: SOmething went wrong");
    }
  }, 1000);
});

//then for resolve   catch for reject    and finally for default
promiseFour
  .then((user) => {
    console.log(user);   //printing total user ie {username:"anni", password:"123abc"}
    return user.username; 
  })
  .then((username) => {
    console.log(username);
  }) //this will print the username from user object. Here we did a chaining of promises it also called as a then'able
  .catch(function (err) {
    console.log(err);
  }) // for handling the error
  .finally(()=>{
    console.log("this is finally block. It always execute either promise resolve or reject");
  })



  //+++++ Promise 05 +++++
const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function (){
    let error = true
    if(!error){
      resolve({username:"JavaScript", password:"123"})
    }else{
      reject("Error: JS went wrong")
    }
  }, 1000);
})

//by using async await.  then and catch are same as async await
//this async await run smoothly when if block is true,  but it generate error when else block execution
async function consumePromiseFive (){
  const response = await promiseFive
  console.log(response);
}
consumePromiseFive();       //{ username: 'JavaScript', password: '123' }


//at that time we need to wrap up in the try catch block where all the conditions get runs smoothly even if there is a error
//we can handle that errors gracefully

// async function consumePromiseFive(){
//   try {
//     const response = await promiseFive
//     console.log(response);

//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();