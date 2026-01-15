/*

Input: n = 4
Output:

ABCDE
ABCD
ABC
AB
A

*/

class Solution {
    pattern15(n) {
        for(let i=0; i<n; i++){
            let ch='A'
            for(let j=0; j<n-i; j++){
               process.stdout.write(ch) 
               ch = String.fromCharCode(ch.charCodeAt(0) + 1);
               
            }
            console.log()
        }

    }
}