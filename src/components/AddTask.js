import React from 'react'


function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  // Example usage:
//   const uniqueId = generateUniqueId();
//   console.log(uniqueId);
  
export const AddTask = ({tasklist,setTaskList,task, setTask}) => {


   const handleSubmit = (e)=>{
    
    e.preventDefault();

    if(task.id)
    {
        const date = new Date();
        const updateTaskList = tasklist.map((todo) => (
            todo.id === task.id ? (todo = {id: todo.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}) : {id: todo.id, name: todo.name, time: todo.time}));
        setTaskList(updateTaskList);
        setTask({})
    }
    else{

    const date = new Date();
    const newTask = {
        id: generateUniqueId(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    };
        console.log(newTask)
        setTaskList([...tasklist,newTask]);
        setTask({})
    }

    

   }

  return (

    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type='text' autoComplete='off' name='task' value={task.name || " "} placeholder='add task' maxLength={30} onChange={e=>setTask({...task, name: e.target.value})} />
            <button type='submit'>{task.id ? "Update":"Add"}</button>
        </form>
    </section>
    )
}
