var guestList = ["Hasnain", "Rafeeq", "Huzaifa", "Bilal"];
var dontCom = guestList[0];
console.log(dontCom, "nih ahh skta");
guestList.splice(0, 1, "Sir Usama");
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, " would you like to dinner with me?")); });
