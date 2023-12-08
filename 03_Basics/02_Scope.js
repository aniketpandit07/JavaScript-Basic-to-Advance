// let a = 300;

// if(true){
//     let b =40
//     console.log("a",a);
// }


function one(){
    const username = "aniket"
    // console.log(website);    //it cann't execute because parent cann't access children function

    function two(){
        const website = "Youtube"
        console.log(username);  //it can be exist because children can access parent
    }
   

    two()
}

one()



if(true){
    const uname = "pandit"
    if(true){
        const website= "yt"
        console.log(uname+website);
    }
    //console.log(website);  //error
}
// console.log(uname);  //error