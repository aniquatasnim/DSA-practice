/*

Input: n = 4
Output:

A
BB
CCC
DDDD
EEEEE

*/

class Solution {
    pattern16(n) {
         for(let i=0; i<n; i++){
            let ch='A'
            ch = String.fromCharCode(ch.charCodeAt(0) + i);
            for(let j=0; j<=i; j++){
               process.stdout.write(ch) 
            } 
            console.log()
        }

    }
}