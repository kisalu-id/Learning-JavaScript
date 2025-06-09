//finds and prints all pairs of numbers from 1 to n that multiply to give n.
let n = parseInt(inp); 

for (let x = 1; x <= n; x++) {
    if (n % x === 0) {
        console.log(x, n / x);
    }
}