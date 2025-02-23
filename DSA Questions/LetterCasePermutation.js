const { createWatchCompilerHost } = require("typescript");

var letterCasePermutation = function(s) {
    const ans =[];
    const a1 = []
    function generate(s,i){
         if(i==s.length){
            ans.push(a1.join(''));
            return;
         }

         if(/[a-zA-Z]/.test(s[i])){
            a1[i] = s[i].toLowerCase();
            generate(s,i+1);
            a1[i]= s[i].toUpperCase();
            generate(s,i+1);
         }
         else{
            a1[i] = s[i];
            generate(s,i+1);
         }
             
    }

    generate(s,0);
    return ans;
};