/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const m = new Map();
    nums.forEach(i => {
    let count = m.get(i) || 0; 
    m.set(i, count + 1);
    });


    const sortedArray = Array.from(m).sort((a, b) => b[1] - a[1]);
    const result = sortedArray.map(p => p[0]);
    return result.slice(0, k);
    
     
};
