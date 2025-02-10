const tasks = [{ taskName: "Write report", completed: true, priority: 2 }, { taskName: "Attend meeting", completed: false, priority: 3 }, { taskName: "Fix bug", completed: false, priority: 1 }, { taskName: "Update website", completed: true, priority: 4 }];

const highestPriorityTask = tasks.find((obj)=>{
    return obj.priority <3;
});
console.log(highestPriorityTask);

const firstNotCompletedtask = tasks.findIndex((obj)=>{
    return !obj.completed;
});
console.log(firstNotCompletedtask);

const completedTaskCount = tasks.reduce((acc,obj)=>{
    return acc + Number(obj.completed);
},0);
console.log(completedTaskCount);

tasks.forEach((obj) =>{
    console.log(obj.taskName);
})
