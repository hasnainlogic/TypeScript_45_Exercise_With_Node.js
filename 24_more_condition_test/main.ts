let itCourse = "typescript";
let uppercase = "TYPESCRIPT";
let five = 5;
let ten = 10;
let fruit :string[] = ["apple","orange","banana"];

console.log("itCourse is equal to typescript")
console.log(itCourse == "typescript");

console.log("\nitCourse is not equal to typescript")
console.log(itCourse != "typescript");

console.log("\n TYPESCRIPT is equal to typescript after converting to lowercase")
console.log(itCourse.toLowerCase() == "typescript");

console.log("\n TYPESCRIPT is not equal to typescript after converting to lowercase")
console.log(itCourse.toLowerCase() != "typescript");

console.log("\n five is equal to 5?");
console.log(five == 5);

console.log("\n five is not equal to 5?");
console.log(five != 5);

console.log("\n five is equal to ten?");
console.log(five == ten);

console.log("\n ten is greater than 5?");
console.log(ten > 5);

console.log("\n ten is not equal to 10?");
console.log(ten != 10);

console.log("\n five is greater than or equal to 5?");
console.log(five >= 5);

console.log("\n ten is less than or equal to 5?");
console.log(ten <= 5);

//"and" & "or" oprater

// using && "and"
console.log("\n five is equal to 5 and ten is not equal to 5?");
console.log(five == 5 && ten != 5);

console.log("\n ten is greater than or equal to 20 and ten is less than or equal to 5?");
console.log(ten >= 20 && ten <= 5);

console.log("\n ten is greater than or equal to 5 and ten is less than or equal to 5?");
console.log(ten >= 5 && ten <= 5);

//using || "OR"

console.log("\n five is greater than or equal to 10 OR ten is less than or equal to 10?");
console.log(five >= 10 || ten <= 10);

console.log("\n ten is not equal to 10 OR five is not equal to 5?");
console.log(ten != 10 || five != 5);

//item is include in array
console.log("\n apple include in fruit array?");
console.log(fruit.includes("apple"));

//NOT Include
console.log("\n apple not include in fruit array?");
console.log(!fruit.includes("apple"));



















