//IIFE is Immediately Invoked Function Expression
//When we don't want to interfare global variable inside a function scope at that time we use IIFE

// function chai(){
//     console.log("db connect");
// }

// chai()

//named iife
(function chai(){
    console.log("db connect");
})();

//when we have to to write 2 IIFE function then must use semicolon ; after function
//unnamed iife
((name)=>{
    console.log(`db connect2 ${name}`);
    
})("ANIKET ")


//defination(parameter) execution(Argument)

