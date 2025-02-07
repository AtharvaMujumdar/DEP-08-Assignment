var lengthOfLongestSubstring = function (s) {

    let m = new Map();
    let count = 0;
    let maxcount = 0;

    for (let i = 0; i < s.length; i++) {
        m.set(s[i], 1);
        count++;
        for (let j = i + 1; j < s.length; j++) {
            let freq = m.get(s[j]);
            if (freq == undefined) {
                m.set(s[j], 1);
                count++;
            }
            else {

                break;
            }
        }
        maxcount = Math.max(maxcount, count);
        m.clear();
        count = 0;
    }

    maxcount = Math.max(maxcount, count);
    return maxcount;
};