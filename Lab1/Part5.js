const Task=["hi","hey"];//array of strings


let addTask=(task,task2)=>{
    Task.push(task);
    Task.push(task2)
    console.log(task+" has been added");
    console.log(Task.length);
}

let listTasks=()=>{
    console.log(Task);
}

let deleetTask=(task)=>{
    console.log("Task "+Task[task]+" has been deleted");
    Task.pop(task);
    console.log(Task.length);
    console.log(Task);
}

addTask("hello","bye");
listTasks();
deleetTask(1);
