import React from "react";
import '../style.css';

const ListTask = ({ tasks, setTasks }) =>{

  function handConcluidoTask(task){

    setTasks(
      tasks.map((item)=>{
        if(item.id === task.id){
          return { ...item, concluido: !item.concluido }
        }
        return item
      })
    )
  }

  return (
    <>
        <ul>
          {tasks.map(task =>(
            <li key={task.id} >
              <span>{task.title} </span>
              <button onClick={()=> handConcluidoTask(task) } >
                { task.concluido ? 
                  <i class="fas fa-check-circle"></i>:
                  <i class="far fa-check-circle"></i>
                }
              </button>
            </li>
          )) }
        </ul>
    </>
  )
};

export default ListTask;