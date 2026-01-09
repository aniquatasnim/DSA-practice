/*
Input: n = 123
Output: 321
Explanation: Reverse of 123 is 321.

*/

class Solution {
    reverseNumber(n) {
        if(n===0){
            return 0;
        }
        else{
            let rev=0;
            while(n>0){
                let lastDigit=0;
                lastDigit=Math.floor(n%10);
                rev=(rev*10)+lastDigit;
                n=Math.floor(n/10);   
            }
            return rev;
            
            
        }

    }
}