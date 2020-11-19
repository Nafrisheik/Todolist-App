import React , { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import List from "./lis";
import InputField from "./inputField";
import Dropdown from "./dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props)=> {
const [tasks,setTasks] = useState([
    { name: "Buy groceries"},
    { name: "Buy paper"},
    { name: "check for mail"}
]);
// window.tasks = tasks;
// window.setTasks = setTasks;


const addTask=(newTask)=>{
    setTasks([
        ...tasks,
        {
            name:newTask,
            isDone:false,
        },
    ]);
};
const deleteTask=(taskIndex)=>{
    setTasks(
        tasks.filter((task, index) => {
            return taskIndex!==index;        
           
            })
        
    )
}
const setPriority=(priority,taskIndex)=>{
    setTasks(
        tasks.map((task,index)=>{
            if(taskIndex==index){
                return{
                    ...task,                    
                    Priority:priority
                };
            }
            return task;
        })
    )
}

const setStatus=(status,taskIndex)=>{
    setTasks(
        tasks.map((task,index)=>{
            if(taskIndex==index){
                return{
                    ...task,                    
                    Status:status
                };
            }
            return task;
        })
    )
}

const pendingTask =tasks.filter((task)=>{
    return task.Status=="Pending";
})

const completedTask =tasks.filter((task)=>{
    return task.Status=="Completed";
})

const lowTask=tasks.filter((task)=>{
    return task.Priority=="Low"
})
const mediumTask=tasks.filter((task)=>{
    return task.Priority=="Medium"
})
const highTask=tasks.filter((task)=>{
    return task.Priority=="High"
})
return(
    <div className="container">
        <h1>{props.title}</h1>
        <InputField  addTask={addTask}/>
<h2> Pending Task={pendingTask.length}  &ensp; Completed Task={completedTask.length}</h2>
<h3>Low:{lowTask.length} Medium:{mediumTask.length} High:{highTask.length} </h3>
        <List items={tasks} deleteTask={deleteTask} setStatus={setStatus} setPriority={setPriority}></List>
    </div>
)}

ReactDOM.render(<App title="TodoList"/>,document.querySelector('#root'));