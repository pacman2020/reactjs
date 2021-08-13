import React, { useState } from "react";
import NavBar from '../../compontens/NavBar';
import '../style.css';

const ListTask = () =>{
  const [tasks ] = useState([
    { id: 1, title: 'limpa casa', concluido: false },
    { id: 2, title: 'limpa carro', concluido: false },
    { id: 3, title: 'estuda', concluido: true }
  ])

  return (
    <>
      <div className="container" >
      <NavBar></NavBar>
        <h3>List Tasks</h3>
        <ul>
          {tasks.map(task =>(
            <li key={task.id} >
              <span>{task.title}</span>
              <span className="concluido" >{ task.concluido ? 'ativo':'desativado'}</span>
            </li>
          )) }
        </ul>
      </div>
    </>
  )
};

export default ListTask;