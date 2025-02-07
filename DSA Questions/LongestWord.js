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
   else
   {
       count++;
       temp += sentence[i];
   }
}
if(count>maxcount){
    word=temp;
    maxcount=count;
}

console.log("The longest word in the sentence is " + word);