/*
Input: n=5, arr = [1,2,3,4,5]
Output: 15
Explanation: Sum of all the elements is 1+2+3+4+5 = 15

*/

class Solution {
    sum(arr,n) {
        let sum=0;
        for (let i=0; i < n; i++){
            sum=sum+arr[i];
        }
        return sum;
     
    }
}
