/*
Input: n = 14
Output: 2
Explanation: There are 2 digits in 14
*/

class Solution {
    countDigit(n) {
        if(n===0){
            return 1;
        }
        else
        {
            let count=0;
           while(n>0){
                n=Math.floor(n/10);
                count= count+1;
           }
            return count;

        }

    }
}