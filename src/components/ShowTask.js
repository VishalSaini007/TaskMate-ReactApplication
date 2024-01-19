import React from 'react'

export const ShowTask = ({tasklist,setTaskList,task,setTask}) => {
    //fake task list for Demo 
//     const tasks =[
//         {id:1,name:"TasK A",time:"11:23:49 19/01/2024"},
//         {id:1,name:"TasK B",time:"11:23:49 19/01/2024"},
//         {id:1,name:"TasK C",time:"11:23:49 19/01/2024"},
//         {id:1,name:"TasK D",time:"11:23:49 19/01/2024"},
//         {id:1,name:"TasK E",time:"11:23:49 19/01/2024"},
//         {id:1,name:"TasK F",time:"11:23:49 19/01/2024"},
//         {id:1,name:"TasK G",time:"11:23:49 19/01/2024"}
// ]

 



const handleDelete = (id) => {
    console.log('Before Deletion:', tasklist);
  
    const updatedTaskList = tasklist.filter(todo => todo.id !== id);
  
    console.log('After Deletion:', updatedTaskList);
  
    setTaskList(updatedTaskList);
  };


  //edit task funciton 
 const handleEdit=(id)=>{
    const selectedTask = tasklist.find(todo =>todo.id === id)
    console.log(selectedTask)
    setTask(selectedTask)
   
 };


  return (
    <section className='showTask'>
        <div className='head'>
        <div >
            <span className="title">todo</span><span className="count">{tasklist.length}</span>
            <span className="clearAll" onClick={()=>setTaskList([])}>Clear All</span>
        </div>

        </div>
        <ul>{tasklist.map((todo)=>(
            <li key={todo.id}>
            <p>
                <span className='task'>{todo.name}</span>
                <span className='time'>{todo.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i> </li>
        ))}
           
        </ul>
    </section>
  )
}
