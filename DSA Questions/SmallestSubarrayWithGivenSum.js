var minSubArrayLen = function(target, nums) {
    let minsize = Infinity,l=0,r=0,sum=0;
    while(r<nums.length){
        sum += nums[r];
        while(sum >= target){
            minsize = Math.min(minsize,r-l+1);
            sum -= nums[l++];
        }
        r++;
    }
    if(minsize === Infinity){
        return 0;
    }
    return minsize;
     
};