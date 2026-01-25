/*
Factorial of a number is the product of all positive integers less than or equal to that number.

Input: n = 2
Output: 2
Explanation: 2! = 1 * 2 = 2.

*/

class Solution {
    factorial(n) {
        if (n===0){
            return 1;
        }
        else{
            let fact=1;
            for (let i=1; i<=n; i++){
                fact=fact*i;
            }
            return fact;
        }

    }
}