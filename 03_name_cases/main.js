var personName = "hasnain logic";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (main) { return main.toUpperCase(); }));
