function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("A ".concat(size.toUpperCase(), " shirt will be printed with the message: '").concat(message, "'."));
}
// Call the function with default parameters
make_shirt();
// Call the function with medium size and default message
make_shirt("medium");
// Call the function with a different message and small size
make_shirt("small", "Hello, World!");
