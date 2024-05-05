let world: string[] = ["Chine","Pakistan","Bangladesh","Afghanistan"];

//Print your array in its original order
console.log("original order", world);

//Print your array in alphabetical order without modifying the actual list.
console.log(" Alphabetical Order ", [...world].sort());

// Show that your array is still in its original order
console.log(" still in original order",world);

//Reverse the order of your list.
console.log("Reverse order", [...world].reverse());

// Show that your array is still in its original order
console.log(" still in original order",world);

//order has changed.
console.log("Original array reverse",world.reverse());

//back to its original order reverse.
console.log("Back to Original array reverse",world.reverse());

//Print the array to show that its order has been changed.
console.log(" stored in alphabetical order", world.sort());

//order has changed again.
console.log("Original array reverse again",world.reverse());
