/*
A prime number is a number which has no divisors except, 1 and itself.
Input: n = 6
Output: 3
Explanation: Prime numbers in the range [1, 6] are 2, 3, 5.

*/

class Solution {
isPrime(n) {
    let count = 0
        for (let i=1;i<=n;++i){
            if (n%i===0){
                count=count+1;
                }
            }
            if (count === 2) return true;
            return false;  
          }
    
    primeUptoN(n) {
        let count=0;
            for (let i=2;i<=n;i++){
                if (this.isPrime(i)) count++;
            }
            return count;   
            
          }
}
