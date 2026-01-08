/*

Input: n = 4
Output:

*
**
***
****
***
**
*


*/

class Solution {
    pattern2(n) {
        for (let i=0 ; i<n ; i++){
            for(let j=0; j<=i; j++){
                process.stdout.write("*")
            }
            console.log()
        }

    }
    pattern5(n) {
        for (let i=1; i<=n; i++){
            for (let j=n; j>i ; j--){
                process.stdout.write("*")
            }
            console.log()
        }
    }
    pattern10(n) {
        this.pattern2(n);
        this.pattern5(n);

    }
}