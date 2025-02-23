var generateParenthesis = function(n) {
    const ans = [];
    function generate(o,c,s){
        if(o === c && o + c === n*2){
            ans.push(s);
            return;
        }
        if(o < n) generate(o+1,c,s+"(");
        if(c < o) generate(o,c+1,s+")");
    } 
    generate(0,0,"");
    return ans;
};