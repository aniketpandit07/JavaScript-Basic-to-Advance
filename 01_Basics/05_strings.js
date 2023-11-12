let name ="ANiket";
let myScore = 45;

// console.log(name + myScore);  outdated syntax

// new syntax by using `` backticks .
// this is also known as string interpolation
console.log(`my name is ${name} and my score is ${myScore}`);

console.log(name[0]);

const Aname = new String("Ansahu_man");
console.log(Aname[4]);
console.log(Aname.toLowerCase());
console.log(Aname.charAt(3));
console.log(Aname.indexOf('a'));  //first occured index return

let newAname = console.log(Aname.substring(3,6)); //first no is including and last no is excluding

let newstring1 = "     dfaslkf      ";
let newString2 = console.log(newstring1.trim());

let url = "www.wafjl.%20.sdfkl/as/%20fl.com"
console.log(url.replace("%20", "-"));  //only replace first occurence of string
console.log(url.replace(/%20/g, "-"));  // replace all occurence of string

console.log(url.includes("waf"));


let tarif = "Blue Eyes Hepnotize teri kardi menu";
console.log(tarif.split(' '));
