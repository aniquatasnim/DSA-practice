/*

Input: n = 4
Output:
A
AB
ABC
ABCD

*/

class Solution {
    pattern14(n) {
        for(let i=0; i<n; i++){
            let ch='A'
            for(let j=0; j<=i; j++){
               process.stdout.write(ch) 
               ch = String.fromCharCode(ch.charCodeAt(0) + 1);

            }
            console.log()
        }

    }
}