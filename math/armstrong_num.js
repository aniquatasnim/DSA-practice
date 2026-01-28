/*
An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.

Input: n = 153
Output: true
Explanation: Number of digits : 3.
13 + 53 + 33 = 1 + 125 + 27 = 153.
Therefore, it is an Armstrong number.

*/

class Solution {
    countDigit(n){
        let count=0;
        if(n===0){
            return 1;
        }
        else
        {
           while(n>0){
                n=Math.floor(n/10);
                count= count+1;
           }
            return count;

        }

        }
     
    isArmstrong(n) {
        const num=n;
        let count= this.countDigit(n);
        let sum=0;
        while(n>0){
            let lastDigit=0;
            lastDigit=Math.floor(n%10);
            sum+=Math.pow(lastDigit, count)
            n=Math.floor(n/10);    
        }
        if(sum==num){
            return true;
        }
        else{
            return false;
        }

    }
}
