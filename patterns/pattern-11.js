/*

Input: n = 4
Output:
1 
0 1 
1 0 1 
0 1 0 1 

*/

class Solution {
    pattern11(n) {
        let start=1;
          for (let i=0 ; i<n ; i++){
            if (i%2==0){
                start=1
            }
            else {
                start=0;
            }
            for(let j=0; j<=i; j++){
                process.stdout.write(start.toString()+" ")
                start=1 - start;
                
            }
            console.log()
        }

    }
}