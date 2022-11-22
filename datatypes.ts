
//Variable names
let lname = 'John';

console.log(lname);

let lname2;
lname2 = 'Alice';
let newname = lname2.toUpperCase();
console.log (newname);

let empList : string[];
empList = ["Akash","Ajay","Santosh","Vikas"];

let numlist: Array<number>;

numlist = [1,2,3,4,5];

let results = numlist.filter((num)=> num>2);
let num = numlist.find((num)=> num === 2);
console.log("results"+" " +results);
console.log("num "+" "+num);


let sum = numlist.reduce((acc, num) => acc + num);

console.log("sum "+ sum);

// Enums


const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

// Tuples
// tuples to swap two numbers

let swapNumbs: [number, number];

function swapNumber (num1 : number, num2: number):[number,number]{

    return [num2, num1]

}

 swapNumbs = swapNumber(1, 2);

 console.log(swapNumbs);

 // any

 // do not use any in existing code base