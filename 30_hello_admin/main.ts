//create a array
let admin : string[] = ["Admin","Hasnain","Huzaifa","Bilal"];

//using forEach on array
admin.forEach(user => {
    if (user === "Admin"){
        console.log(`Hello ${user}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again.`)
}
})


