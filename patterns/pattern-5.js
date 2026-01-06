/*
Input: n = 4
Output:
****
***
**
*

*/

class Solution {
    pattern5(n) {
        for (let i=1; i<=n; i++){
            for (let j=n; j>=i ; j--){
                process.stdout.write("*")
            }
            console.log()
        }
    }
}
