function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let originalMagicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Derren Brown'];

// Create a copy of the original array
let modifiedMagicians: string[] = [...originalMagicians];

// Call make_great() with a copy of the array
let greatMagicians: string[] = make_great(modifiedMagicians);

// Call show_magicians() with the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call show_magicians() with the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
