import React from "react";
import '../style.css';

const ListTask = ({ tasks, setTasks }) =>{

  return (
    <>
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
    </>
  )
};

export default ListTask;