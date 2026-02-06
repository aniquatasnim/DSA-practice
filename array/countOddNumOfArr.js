/*
Given an array of n elements. The task is to return the count of the number of odd numbers in the array.
Input: n=5, array = [1,2,3,4,5]
Output: 3
Explanation: The three odd elements are (1,3,5).

*/

class Solution {
    countOdd(arr, n) {
        let count=0;
         for (let i=0; i<n;i++){
            if (arr[i] % 2 == 1){
                count++;
            }
         }
         return count;
    
    }
}