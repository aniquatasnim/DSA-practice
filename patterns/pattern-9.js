/*

Input: n = 4
Output:
    * 
   ***
  *****
 *******
 *******
  *****
   ***
    *

*/

class Solution {
      pattern7(n) {
        for (let i=1; i<=n; i++){
            for(let j=1; j<=n-i; j++){
                process.stdout.write(" ")
            }
            for(let k=1; k<=2*i-1; k++){
                process.stdout.write("*")
            }
            console.log()
        }

    }
     pattern8(n) {
        for (let i=0; i<n; i++){
            for(let j=0; j<i; j++){
                process.stdout.write(" ")
            }
            for(let k=0; k<(2*n-1)-(2*i); k++){
                process.stdout.write("*")
            }
            console.log()
        }
    }
    pattern9(n) {
        this.pattern7(n)
        this.pattern8(n)
    }
}
