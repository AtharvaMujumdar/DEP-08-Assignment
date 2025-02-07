let sentence = prompt("Enter a sentence :");

let word="";
let count=0;
let maxcount=0;
let temp="";
for(let i=0;i<sentence.length;i++){
   if(sentence[i]==' '){
       if(count>maxcount)
       {
           maxcount=count;
           word=temp;
       }
       count=0;
       temp="";
   }
   else {
       if(sentence[i]=='a' || sentence[i]=='e' || sentence[i]=='i' || sentence[i]=='o' || sentence[i]=='u'){
           count++;
       }
       if(sentence[i]=='A' || sentence[i]=='E' || sentence[i]=='I' || sentence[i]=='O' || sentence[i]=='U'){
           count++;
       }
       
       temp += sentence[i];
   }
}
if(count>maxcount){
    word=temp;
    maxcount=count;
}

console.log("The word with highest number of vowels in the sentence is " + word);