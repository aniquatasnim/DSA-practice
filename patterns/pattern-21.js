/*
Input: n = 5
Output:

*****
*   *
*   *
*   *
*****

*/

class Solution {
    pattern21(n) {
        for (let i=1; i<=n; i++){
            if(i==1 || i==n){
            for (let j=1; j<=n; j++){
                process.stdout.write("*")
            }
            }
            else{
                process.stdout.write("*")
                for (let j=1; j<=n-2; j++){
                process.stdout.write(" ")
            }
                process.stdout.write("*")
            
            }
            console.log()
        }

    }
}