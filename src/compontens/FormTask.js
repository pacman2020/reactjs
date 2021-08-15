import React from "react";
import '../style.css';
import ListTask from "./ListTasks";
import NavBar from '../compontens/NavBar';


const FormTask = () =>{
  const [tasks, setTasks ] = React.useState([{ id: 1, title: 'limpa casa', concluido: true }])
  const [title, setTitle] = React.useState('')

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
        <form onSubmit={handsetTasks}>
          <input 
            onChange={(e)=>{setTitle(e.target.value)}}
            type="text" 
            name="title"
            value={title}  
            placeholder="title task"  />
          <input className="btn" value="criar" type="submit"/>
        </form>
        <ListTask
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </>
  )
};

export default FormTask;