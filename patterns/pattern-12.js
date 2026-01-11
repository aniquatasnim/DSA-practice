/*
Input: n = 5
Output:
1        1
12      21
123    321
1234  4321
1234554321

*/

class Solution {  
    pattern12(n) {
      for(let i=1; i<=n ; i++){
            for(let j=1; j<=i; j++){
                process.stdout.write(j.toString())
            }
            for(let j=1; j<=(2*n)-(2*i); j++){
                process.stdout.write(" ")
            }
            for(let j=i; j>=1; j--){
                process.stdout.write(j.toString())
            }
            console.log()
        }
    }
}