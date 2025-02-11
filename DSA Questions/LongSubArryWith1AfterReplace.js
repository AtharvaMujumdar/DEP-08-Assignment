var longestSubarray = function(nums) {
    let ans=-Infinity,l=0,r=0,zero=0,one=0;
    while(r<nums.length){
         if(nums[r]==0 && zero==0){
            zero++;
         }
         
         else if(nums[r]==0 && zero>0){
             ans = Math.max(ans,r-l-1);
             while(nums[l]!=0){
                l++;
             }
             l++;
         }
         r++;     
    }
    ans=Math.max(ans,r-l-1);
    return ans;
};