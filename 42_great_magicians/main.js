function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Derren Brown'];
// Call make_great() to modify the array
magicians = make_great(magicians);
// Call show_magicians() to see the modified list
show_magicians(magicians);
