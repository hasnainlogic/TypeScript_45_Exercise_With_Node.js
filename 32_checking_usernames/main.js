//create a array
var current_users = ["Hasnain", "Huzaifa", "Bilal", "Hassan", "Hamza"];
//new array
var new_users = ["hassaN", "Ali Raza", "Rafeeq", "hamza", "Naveed"];
//convert a array to lowercase 
new_users.forEach(function (one_user) {
    var condition = current_users.some(function (user) { return user.toLowerCase() === one_user.toLowerCase(); });
    //print a message 
    if (condition) {
        console.log("The username ".concat(one_user, " is not available. Please enter a new username."));
    }
    else
        console.log("The username ".concat(one_user, " is available."));
});
