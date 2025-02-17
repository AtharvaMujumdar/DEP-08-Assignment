const array =["Home"];
let curr = 0;
updateDisplay(array[curr]);

document.querySelector('#submit').addEventListener('click',()=>{
    const value = document.querySelector('#input').value;
    document.querySelector('#input').value = "";
    if(value.length){
        array.push(value);
        curr++;
        updateDisplay(array[curr]);
    }
    
});

document.querySelector('#forward').addEventListener('click',()=>{
    if(curr+1 == array.length){
        updateDisplay("no forward pages");
    }
    else{
        curr ++;
        updateDisplay(array[curr]);
    }
});

document.querySelector('#back').addEventListener('click',()=>{
    if(curr == 0){
        updateDisplay("no backward pages");
    }
    else{
        curr --;
        updateDisplay(array[curr]);
    }
});


function updateDisplay(ele){
    
    document.querySelector('#display').textContent = ele;
    
        
    
}

