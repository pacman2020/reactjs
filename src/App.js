import React, { useState, useEffect } from "react";
import './style.css';

const App = () =>{
  const [tasks, setTasks] = useState([
    { id: 1, title: 'limpa casa', concluido: false },
    { id: 2, title: 'limpa carro', concluido: false },
    { id: 3, title: 'estuda', concluido: true }
  ])

  return (
    <>
      <div className="lista-tasks" >
        <h3>List Tasks</h3>
        <ul>
          {tasks.map(task =>(
            <li key={task.id} >
              <span>{task.title}</span>
              <span className="concluido" >{ task.concluido ? 'ativo':'desativado'}</span>
            </li>
          )) }
        </ul>
        <button className="btn" >salva</button>
      </div>
    </>
  )
};

export default App;