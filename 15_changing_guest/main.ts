let  guestList = ["Hasnain","Rafeeq","Huzaifa","Bilal"];

let dontCom = guestList[0];

console.log(dontCom, "nih ahh skta");

guestList.splice(0, 1, "Sir Usama");

guestList.forEach( guest => console.log(`Hello ${guest} would you like to dinner with me?`))
