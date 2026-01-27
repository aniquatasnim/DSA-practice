/*
A perfect number is a number whose proper divisors (excluding the number itself) add up to the number itself.

Input: n = 6
Output: true
Explanation: Proper divisors of 6 are 1, 2, 3.
1 + 2 + 3 = 6.

*/

class Solution {
    isPerfect(n) {
        let sum = 0;
        let num=n;
        for(let i=1;i<n;i++){
            if(n%i===0){
                sum=sum+i;
            }
        }
        if(sum === num){
            return true;
        }
        else{
            return false;
        }
    }
}