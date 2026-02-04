/*

A number which completely divides another number is called it's divisor.
Input: n = 6
Output = [1, 2, 3, 6]
Explanation: The divisors of 6 are 1, 2, 3, 6.

*/

class Solution {
    divisors(n) {

        let div = [];
        for (let i=1; i<=n; i++){
            if (n % i === 0){
                div.push(i)
            }
        }
        return div;
    }
}