/*
Input: n = 25
Output: 5
Explanation: The largest digit in 25 is 5.
*/

class Solution {
    largestDigit(n) {
        let largestDigit=0;
        while(n>0){
            let lastDigit=0;
            lastDigit=Math.floor(n%10);
            if (lastDigit > largestDigit){
            largestDigit=lastDigit;
            }
            n=Math.floor(n/10);
        }
        return largestDigit;

    }
}