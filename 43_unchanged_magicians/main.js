var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var originalMagicians = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Derren Brown'];
// Create a copy of the original array
var modifiedMagicians = __spreadArray([], originalMagicians, true);
// Call make_great() with a copy of the array
var greatMagicians = make_great(modifiedMagicians);
// Call show_magicians() with the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Call show_magicians() with the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
