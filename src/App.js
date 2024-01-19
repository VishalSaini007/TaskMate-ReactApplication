import { useEffect, useState } from 'react';

import {AddTask} from './components/AddTask';
import {ShowTask} from './components/ShowTask';
import {Header} from './components/Header';

import './App.css';



function App() {

  const[tasklist,setTaskList]=useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  const[task, setTask] =useState(" ");


  useEffect(()=>{localStorage.setItem("tasklist",JSON.stringify(tasklist))});

  return (
    <div className="App">
      <Header/>
      <AddTask
       tasklist={tasklist}
       setTaskList={setTaskList}
       task={task}
       setTask={setTask}
        />
      <ShowTask 
      tasklist={tasklist} 
      setTaskList={setTaskList}
      task={task}
      setTask={setTask} 
      />
    </div>
  );
}

export default App;
