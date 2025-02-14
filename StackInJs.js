class Stack{
    constructor() {
        this.top = -1;
        this.elements = [];
    }
    pushElement(ele){
        this.top ++;
        this.elements.push(ele);
    }
    popElement(ele){
        if(this.top ==-1){
            return "stack is empty";
        }
        return this.elements[this.top--];
    }
    getSize(){
        return this.top+1;
    }
}
