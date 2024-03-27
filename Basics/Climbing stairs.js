/*You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
https://leetcode.com/problems/climbing-stairs/description/
*/

//parseInt parses a string and converts it to an integer
let steps = parseInt(prompt("Enter the number of steps:"));
 
//Not a Number?
if (isNaN(steps) || steps < 1) {
    alert("Please enter a valid positive number.");
} else {
    let ways = climbing(steps);
    alert("Number of distinct ways to climb to the top of " + steps + " stairs: " + ways);
}

function climbing(n) {
    if (n === 1 || n === 2)
        return n;
  
    //Array() constructor creates a new array object
    let dp = new Array(n +1);
    dp[1] = 1;  
    dp[2] = 2;

    for (let i=3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
