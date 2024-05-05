//create a array
var admin = ["Admin", "Hasnain", "Huzaifa", "Bilal"];
admin = [];
if (admin.length === 0) {
    console.log("We need to find some users!");
}
else {
    //using forEach on array
    admin.forEach(function (user) {
        if (user === "Admin") {
            console.log("Hello ".concat(user, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    });
}
