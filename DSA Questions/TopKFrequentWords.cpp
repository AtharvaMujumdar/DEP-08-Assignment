class Solution {
    public:
        vector<string> topKFrequent(vector<string>& words, int k) {
            map<string,int>m;
            for(int i=0;i<words.size();i++){
                m[words[i]]++;
            }
            vector<pair<int,string>>v;
            for(auto it : m){
                v.push_back({it.second,it.first});
            }
            sort(v.begin(),v.end(),[](const pair<int,string>&a,const pair<int,string>&b){
                if(a.first==b.first){
                    return a.second<b.second;
                }
                return a.first>b.first;
            });
    
            vector<string>res;
            for(int i=0;i<k;i++){
                res.push_back(v[i].second);
            }
            return res;
               
            
            
        }
    };