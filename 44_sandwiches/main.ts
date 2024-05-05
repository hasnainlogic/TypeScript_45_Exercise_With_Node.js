function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
    console.log("Enjoy your sandwich!");
}

// Call the function with different number of arguments
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese");
make_sandwich("Peanut Butter", "Jelly");
