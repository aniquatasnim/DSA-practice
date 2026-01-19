/*


Input: n = 4
Output:

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

*/

class Solution {
    upperpart(n){
        for (let i=0; i<n; i++){
            for (let j=1; j<=n-i; j++){
               //process.stdout.write(j.toString())
                process.stdout.write("*")
            }
            for (let j=1; j<=2*i; j++){
                process.stdout.write(" ")
            }
            for (let j=1; j<=n-i; j++){
                process.stdout.write("*")
            }
            console.log()
        }

    }
    lowerpart(n){    
        for (let i=n-1; i>=0; i--){
            for (let j=1; j<=n-i; j++){
                //process.stdout.write(j.toString())
                process.stdout.write("*")
            }
            for (let j=1; j<=2*i; j++){
                process.stdout.write(" ")
            }
            for (let j=1; j<=n-i; j++){
                process.stdout.write("*")
            }
            console.log()
        }
    }
    pattern19(n) {
        this.upperpart(n)
        this.lowerpart(n)
    }
}