/*

The Greatest Common Divisor (GCD) of two integers is the largest positive integer that divides both of the integers.

Input: n1 = 4, n2 = 6
Output: 2
Explanation: Divisors of n1 = 1, 2, 4, Divisors of n2 = 1, 2, 3, 6
Greatest Common divisor = 2.

*/

class Solution {
    GCD(n1, n2) {
        let gcd=1;
        for (let i=1; i <= Math.min(n1, n2); i++){
            if (n1 % i ===0 && n2 % i === 0){
                gcd = i;
            }
        }
        return gcd;

    }
}
