function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Derren Brown'];

// Call make_great() to modify the array
magicians = make_great(magicians);

// Call show_magicians() to see the modified list
show_magicians(magicians);
