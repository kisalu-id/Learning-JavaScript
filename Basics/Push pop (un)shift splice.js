//push and pop methods insert and remove variables from the end of an array
//push - insert to the end of an array
//pop - remove variables from the end of an array
var myStack = [0];
myStack.push(1); //add 1, 2, 3
myStack.push(2);
myStack.push(3);
console.log(myStack);
myStack.push(4); //add 4
console.log(myStack.pop()); //remove 4
console.log(myStack);

//unshift and shift methods are similar to push and pop, they work from the beginning of the array
var myArray = [10,6,7,8];
//the shift keyword will remove the variables of the array in the exact order they were inserted in
console.log(myArray.shift()); //remove 10
myArray.unshift(5); //add 5
myArray.unshift(4);
myArray.push(9,10);
console.log(myStack,myArray); 

//splicing arrays removes a certain part from an array to create a new array, made up from the part we took out
//removing the two numbers from the following array beginning from the 4th index
var splice = myArray.splice(4,2);

console.log();
console.log("Splice: " + splice);
console.log("My array: " + myArray);
