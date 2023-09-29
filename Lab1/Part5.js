
const Task = ["hi", "hey"];//array of strings

/*
this fucntion is adding to teh task array and is then starting the is has been added 
and is then showing how many iterms there is
*/
let addTask = (task, task2) => {
    Task.push(task);
    Task.push(task2)
    console.log(task + " has been added");
    console.log(Task.length);
}

/*
this function is show all items in the array
*/
let listTasks = () => {
    console.log(Task);
}

/*
This funciton is deleteing an item form the array, it tells you what item it is deleting, then deletes it, followed it show shte lenght of the array, and at the end prints out the array.
*/
let deleetTask = (task) => {
    console.log("Task " + Task[task] + " has been deleted");
    Task.pop(task);
    console.log(Task.length);
    console.log(Task);
}

//These call the fucntion one after another
addTask("hello", "bye");
listTasks();
deleetTask(1);
