//Basic operators

//operand == argument, what operators are applied to

alert(16 ** (1/2)); //4; power of 1/2
alert(64 ** (1/3)); //4

//numeric conversion, unary +

//The plus + exists in binary form and in unary form. The plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
//same thing as Number(...), but is shorter.

alert(+true); //1     alert(+""); //0


let a = "10";
let b = "5";

//both values converted to numbers before the binary plus
alert( +a + +b); //15

//assignment "=" returns a value

let z = 10;
let x = 5;
let c = 7 - (z = x + 3);
alert( z ); //8
alert( c ); //-1

//chaining assignments, from right to left

let d, e, f;
d = e = f = 10 + 5; 

alert(d, e, f); // 15


for (g = 1, h = 6, i = g * h; g <=1 ; g++) {
  //only the last expression after comma is evaluated
  let j = 10 + (g += 20)
  console.log("j is: " + j); //31
  console.log("g is: " + g); //21
}

let k = (3+4, 5+6);
console.log ("k is: " + k); //11

let l = 2;
l -= 5 - 4 + ""; //right part gets evaluated first

alert("l is: " + l); //1
