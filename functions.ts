//name function


function add(a:number,b:number):number{
    return a+b;
}

//always have the written type
//1.compiler
//2. when miss return it will be by default void 


console.log(add(2,4));

const sub = (num1:number, num2:number): number => num1 - num2;

console.log(sub(3,2));

//optional paramters;'

function add2(a:number,b:number, c?:number):number{
    return c? a+b+c: a+b;
}

