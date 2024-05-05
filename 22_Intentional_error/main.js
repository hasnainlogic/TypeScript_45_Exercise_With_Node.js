var guestList = ["Hasnain", "Rafeeq", "Huzaifa", "Bilal"];
//received an array index error
//guestList.forEach( guest => console.log(`Hello ${guestList} would you like to dinner with me`))
//solved error
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, " would you like to dinner with me")); });
