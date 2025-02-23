var subsets = function(nums) {
    const ans =[];
    
    function generate(i,arr){
        if(i===nums.length){
           ans.push([...arr]);
           return;
        }
        
        arr.push(nums[i]);
        generate(i+1,arr);

        arr.pop();
        generate(i+1,arr);
    }
    generate(0,[]);
    return ans;
};