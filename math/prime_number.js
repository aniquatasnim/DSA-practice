/*
A prime number is a number which has no divisors except 1 and itself.

Input: n = 5
Output: true
Explanation: The only divisors of 5 are 1 and 5 , So the number 5 is prime.

*/

class Solution {
    isPrime(n) {
          //your code goes here
          if (n<2){
            return false;
          }
          else{
            for (let i=2;i<n;++i){
                if (n%i===0){
                    return false;
                }
            }
            return true;    
            
          }
    }
}

  
