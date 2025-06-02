inp = [234.45, 5, 4];

console.log("Bill Split Calculator");

let billAmount = parseFloat(inp[0]); // Don't change this line
let tipPercentage = parseFloat(inp[1]); // Don't change this line
let numPeople = parseInt(inp[2]); // Don't change this line

let tipAmount = billAmount * tipPercentage / 100;
let totalAmount = billAmount + tipAmount;
let amountPerPerson = totalAmount / numPeople;


console.log("TOtal ampunt to pay: $" + totalAmount.toFixed(3));
console.log("Each person should pay: $" + amountPerPerson.toFixed(2));
