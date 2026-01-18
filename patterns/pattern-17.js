/*
Input: n = 5
Output:

    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA

*/
class Solution {
    pattern17(n) {
            for(let i=1; i<=n; i++){
            for(let j=0; j<n-i; j++){
               process.stdout.write(" ") 
            } 
            let ch='A'
            for(let j=1; j<=2*i-1; j++){     
            process.stdout.write(ch)
            if(j<i){
            ch = String.fromCharCode(ch.charCodeAt(0)+1);
            }
            else{
               ch = String.fromCharCode(ch.charCodeAt(0)-1); 
            }
            } 
            console.log()
        }

    }
}
