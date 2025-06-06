//Print numbers from 1 to 20, stopping at the first number divisible by both 3 and 5
//I'm just warming up my brain so it doesn't pull a muscle later 

let number = 1;
while (number <= 20) {
    console.log(number);
    if (number % 3 === 0 && number % 5 === 0) {
        break;
    }
    number += 1;
}

//print only even numbers using break statement
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        //stops the current iteration and continues to the next iteration
        continue;
    }
    console.log(i);
}
