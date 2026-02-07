/*
Given an array arr of size n, the task is to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order. If the array is sorted then return True, else return False.

Input: n = 5, arr = [1,2,3,4,5]
Output: True
Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

*/

class Solution {
    arraySortedOrNot(arr, n) {
         for (let i=0; i<n-1; i++){
            for(let j=i+1; j<n; j++){
                if(arr[i]> arr[j]){
                    return false;
                }
                
            }
         }
        return true;
    }
}