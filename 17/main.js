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
console.log("Unfortunately the new dinner Table won't arrive on time so I can only invite two guests to dinner with me");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, " I cant invite you to dinner."));
}
;
console.log("Invitation to the last two Guest.");
guestList.forEach(function (last) { return console.log("Luckily ".concat(last, " you are still invited to dinner ")); });
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
