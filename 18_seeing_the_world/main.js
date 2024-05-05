var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var world = ["Chine", "Pakistan", "Bangladesh", "Afghanistan"];
//Print your array in its original order
console.log("original order", world);
//Print your array in alphabetical order without modifying the actual list.
console.log(" Alphabetical Order ", __spreadArray([], world, true).sort());
// Show that your array is still in its original order
console.log(" still in original order", world);
//Reverse the order of your list.
console.log("Reverse order", __spreadArray([], world, true).reverse());
// Show that your array is still in its original order
console.log(" still in original order", world);
//order has changed.
console.log("Original array reverse", world.reverse());
//back to its original order reverse.
console.log("Back to Original array reverse", world.reverse());
//Print the array to show that its order has been changed.
console.log(" stored in alphabetical order", world.sort());
//order has changed again.
console.log("Original array reverse again", world.reverse());
