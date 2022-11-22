//Variable names
var lname = 'John';
console.log(lname);
var lname2;
lname2 = 'Alice';
var newname = lname2.toUpperCase();
console.log(newname);
var empList;
empList = ["Akash", "Ajay", "Santosh", "Vikas"];
var numlist;
numlist = [1, 2, 3, 4, 5];
var results = numlist.filter(function (num) { return num > 2; });
var num = numlist.find(function (num) { return num === 2; });
console.log("results" + " " + results);
console.log("num " + " " + num);
var sum = numlist.reduce(function (acc, num) { return acc + num; });
console.log("sum " + sum);
var c = 2 /* Color.Blue */;
// Tuples
// tuples to swap two numbers
var swapNumbs;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumber(1, 2);
console.log(swapNumbs);
