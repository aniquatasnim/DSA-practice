/*
Input: n = 4
Output:
1 
2 3 
4 5 6 
7 8 9 10

*/

class Solution {
    pattern13(n) {
        let num=1;
        for(let i=0; i<n; i++){
            for(let j=0; j<=i; j++){
                process.stdout.write(num.toString()+" ")
                num=num+1;
            }
            console.log()
        }

    }
}