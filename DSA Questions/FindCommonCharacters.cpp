class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        vector<int>v(26);
        vector<int>v1(26);
        for(int i=0;i<words[0].size();i++)
        {
            v[words[0][i]-'a'] ++;
        }
        for(int i=1;i<words.size();i++)
        {
           fill(v1.begin(),v1.end(),0);
           for(int j=0;j<words[i].size();j++){
             v1[words[i][j]-'a']++;
           }
           for(int j=0;j<26;j++){
            v[j]= min(v[j],v1[j]);
           }
        }
        vector<string>res;
        for(int i=0;i<26;i++){
            int freq=v[i];
            for(int j=0;j<freq;j++){
                res.push_back(string(1,'a'+i));
            }
        }
        return res;
    }
};