/*
Input: n = 25
Output: 1
Explanation: The only odd digit in 25 is 5.
*/

class Solution {
    countOddDigit(n) {
        if(n===0){
            return 0;
        }
        else
        {
        let count=0;
        while(n>0){
            let lastDigit=0;
            lastDigit = Math.floor(n%10);
            n=Math.floor(n/10);
            if(Math.floor(lastDigit%2)==1){
                count=count+1;
            }
        }        
            return count;


        }

    }
}