
var maximumSubarraySum = function(nums, k) {
    let i=0;
    let curr=0;
    let maxsum=0;
    const m = new Set();
    for(let j=0;j<nums.length;j++){
        if(!m.has(nums[j])){
            curr += nums[j];
            m.add(nums[j]);
            if(j-i+1 === k){
                maxsum=Math.max(maxsum,curr);
                curr -= nums[i];
                m.delete(nums[i]);
                i++;
            }
        }
        else{
            while(nums[i]!== nums[j]){
                curr -= nums[i];
                m.delete(nums[i]);
                i++;
            }
            i++;
        }
        

    }
    return maxsum;
};