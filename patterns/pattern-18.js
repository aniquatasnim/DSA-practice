/*
Input: n = 4
Output:

E 
D E 
C D E 
B C D E 
A B C D E

*/

class Solution {
    pattern18(n) {
        for (let i=0;i<n; i++){

            for (let ch = 'A'.charCodeAt(0) + n - 1 - i; ch <= 'A'.charCodeAt(0) + n - 1; ch++) {
                process.stdout.write(String.fromCharCode(ch) + " ");
            }
           
            console.log()
        }
  
    }
}
