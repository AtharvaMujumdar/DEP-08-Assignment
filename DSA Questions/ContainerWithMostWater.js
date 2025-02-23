var maxArea = function(height) {
    let maxans = -Infinity;
    let i=0,j=height.length-1;
    while(i<j){
        let ans = Math.min(height[i],height[j]);
        maxans = Math.max(maxans,ans*(j-i));
        if(height[i]<height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    let ans = Math.min(height[i],height[j]);
    maxans = Math.max(maxans,ans*(j-i));
    return maxans;
};