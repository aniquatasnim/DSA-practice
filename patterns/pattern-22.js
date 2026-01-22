/*

Input: n = 5
Output:

5 5 5 5 5 5 5 5 5 
5 4 4 4 4 4 4 4 5 
5 4 3 3 3 3 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 2 1 2 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 3 3 3 3 4 5 
5 4 4 4 4 4 4 4 5 
5 5 5 5 5 5 5 5 5

*/

class Solution {
    pattern22(n) {
         for (let i=0; i<=2*n-2; i++){
             let row="";
            for (let j=0; j<=2*n-2; j++){
              
               let top=i;
               let bottom=(2*n-2)-i;
               let left=j;
               let right=(2*n-2)-j;
               row += (n-(Math.min(Math.min(top,bottom),Math.min(left,right)))+" ")
            }
            console.log(row)
        }

    }
}