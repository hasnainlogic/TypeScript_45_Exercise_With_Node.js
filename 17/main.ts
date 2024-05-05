let  guestList = ["Hasnain","Rafeeq","Huzaifa","Bilal"];

let dontCom = guestList[0];

console.log(dontCom, "nih ahh skta");

guestList.splice(0, 1, "Sir Usama");

console.log("Good News ! We have Found a Bigger Table For Dinner.")

guestList.unshift("Sir Daniyal Nagouri")

guestList.push("Sir Asad");

let middle : number= Math.floor(guestList.length / 2)
guestList.splice(middle, 0, "Sir Aqip");

guestList.forEach( guest => console.log(`Hello ${guest} would you like to dinner with me?`))

console.log("Unfortunately the new dinner Table won't arrive on time so I can only invite two guests to dinner with me");

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest} I cant invite you to dinner.`)
};

console.log("Invitation to the last two Guest.");

guestList.forEach(last => console.log(`Luckily ${last} you are still invited to dinner `))

guestList.pop();
guestList.pop();

console.log("Empty list:", guestList);