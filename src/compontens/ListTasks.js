import React, { useState } from "react";
import NavBar from '../compontens/NavBar';
import '../style.css';

const ListTask = () =>{
  const [tasks, setTasks ] = useState([
    { id: 1, title: 'limpa casa', concluido: true },
  ])
  const [title, setTitle] = useState('')

  function handsetTasks(e){
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: title,
      concluido: false,
    }

    setTasks([...tasks, newTask])

    setTitle('')
  }

  return (
    <>
      <div className="container" >
      <NavBar></NavBar>
        <h3>List Tasks</h3>
        <form onSubmit={handsetTasks}>
          <input 
            onChange={(e)=>{setTitle(e.target.value)}}
            type="text" 
            name="title"
            value={title}  
            placeholder="title task"  />
          <input className="btn" value="criar" type="submit"/>
        </form>
        <ul>
          {tasks.map(task =>(
            <li key={task.id} >
              <span>{task.title}</span>
              <span className="concluido" >
                { task.concluido ? <i class="fas fa-check-circle"></i>:
                <i class="far fa-play-circle"></i>}</span>
            </li>
          )) }
        </ul>
         
      </div>
    </>
  )
};

export default ListTask;