var combinationSum = function(candidates, target) {
    const ans = [];
    
    function generate(t, i, arr) {
        if (t === 0) {
            ans.push([...arr]);
            return;
        }
        if (t < 0 || i === candidates.length) {
            return;
        }
        arr.push(candidates[i]);
        generate(t - candidates[i], i, arr);
        arr.pop();
        generate(t, i + 1, arr);
    }
    
    generate(target, 0, []);
    return ans;
};