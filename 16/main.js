var guestList = ["Hasnain", "Rafeeq", "Huzaifa", "Bilal"];
var dontCom = guestList[0];
console.log(dontCom, "nih ahh skta");
guestList.splice(0, 1, "Sir Usama");
console.log("Good News ! We have Found a Bigger Table For Dinner.");
guestList.unshift("Sir Daniyal Nagouri");
guestList.push("Sir Asad");
var middle = Math.floor(guestList.length / 2);
guestList.splice(middle, 0, "Sir Aqip");
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, " would you like to dinner with me?")); });
