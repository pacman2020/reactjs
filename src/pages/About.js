import React, { useState, useEffect } from "react";
import NavBar from '../compontens/NavBar';
import './style.css';

const ListTask = () =>{
  const [redes, setRedes] = useState([
    { id: 1, name: 'instagram', links: 'http:localhost:3000/instagram' },
    { id: 2, name: 'facebook', links: 'http:localhost:3000/facebook' },
    { id: 3, name: 'telegram', links: 'http:localhost:3000/telegram' }
  ])

  return (
    <>
      <div className="lista-tasks" >
      <NavBar></NavBar>
        <h3>List Tasks</h3>
        <ul>
          {redes.map(rede =>(
            <li key={rede.id} >
              <span>{rede.title}</span>
              <span >{ rede.links }</span>
            </li>
          )) }
        </ul>
      </div>
    </>
  )
};

export default ListTask;