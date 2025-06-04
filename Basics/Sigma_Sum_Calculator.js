function sigma(n) {
  // Write code here
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum
}

function ligma(n) {
   return n * (n + 1) / 2;
}

let x = 135;
console.log("sigma:", sigma(x));
console.log("ligma:", ligma(x));