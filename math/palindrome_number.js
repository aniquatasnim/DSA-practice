/*
palindrome number
Input: n = 121
Output: true
Explanation: When read from left to right : 121.
When read from right to left : 121.

*/
class Solution {
    isPalindrome(n) {
        if(n===0){
            return true;
        }
        else{
            const num=n;
            let rev=0;
            while(n>0){
                let lastDigit = 0;
                lastDigit=Math.floor(n%10);
                rev=(rev*10)+lastDigit;
                n=Math.floor(n/10);
            }
            if (num===rev){
                return true;
            }
            else {
                return false;
            }
        }

    }
}