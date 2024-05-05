function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`A ${size.toUpperCase()} shirt will be printed with the message: '${message}'.`);
}

// Call the function with default parameters
make_shirt();

// Call the function with medium size and default message
make_shirt("medium");

// Call the function with a different message and small size
make_shirt("small", "Hello, World!");
