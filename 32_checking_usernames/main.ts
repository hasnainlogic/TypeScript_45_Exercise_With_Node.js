//create a array
let current_users = ["Hasnain", "Huzaifa", "Bilal", "Hassan", "Hamza"]

//new array
let new_users = ["hassaN", "Ali Raza", "Rafeeq", "hamza", "Naveed"]

//convert a array to lowercase 
new_users.forEach(one_user => {
    let condition = current_users.some(user => user.toLowerCase() === one_user.toLowerCase() )

    //print a message 
    if (condition){
        console.log(`This username ${one_user} is not available. Please enter a new username.`)
    }
    else
        console.log(`This username ${one_user} is available.`)

})


