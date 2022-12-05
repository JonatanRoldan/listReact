import {useAuth} from '../context/authContext';
import { Formulario } from './Formulario';
import {useEffect, useState} from 'react'
import './List.css'
import Todo from './Todo';

export function List() {
  const {user,logout,loading}=useAuth();
  //console.log(user.uid);
  const [tarea, setTarea]=useState('')
  //listado de tareas
  const [listadoTareas,setListadoTareas]=useState(JSON.parse(localStorage.getItem('list'))||[]);
  useEffect(()=>{localStorage.setItem('list',JSON.stringify(listadoTareas))},[listadoTareas])
  const handleLogaut = async ()=>{
    await logout();
  };
  function handleSubmit(e){
    e.preventDefault()
    if(tarea===''){
      return
    }
    const nuevaTarea={
      id: Date.now(),
      tarea: tarea,
      completado: false,
      usuario: user.uid
    }
    const temp =[nuevaTarea,...listadoTareas]
    setListadoTareas(temp)
    setTarea('')
    console.log(listadoTareas)
  }
  function handleChange(e){
    setTarea(e.target.value)
  }
  function handleUpdate(id, value){
    const temp = [...listadoTareas]
    const item = temp.find(item => item.id === id)
    item.tarea = value;
    setListadoTareas(temp);
  }
  function handleDelete(id){
    const temp = listadoTareas.filter((item) => item.id !== id);
    setListadoTareas(temp)
  }
  function handleComplet(id){
    const temp = [...listadoTareas]
    const item = temp.find(item => item.id === id)
    item.completado = !item.completado;
    setListadoTareas(temp);
  }

  if(loading)return<h1>Loading</h1>
  return (
    <div>
    <i className="bi bi-box-arrow-left fs-1"  onClick={handleLogaut}></i>
      <div className="contenedorPrincipal">
        <h3>{user.email}</h3>
        <div className="contenedorFormulario">
          <Formulario tarea={tarea} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>
        <div className='contenedorTareas'>
          <div className='contenedorInfoTareas'>
            {listadoTareas.filter(item => item.usuario===user.uid).map((item)=>(
              <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} onComplet={handleComplet} />
            ))}
          </div>
        </div>
      </div>  
    </div>
  )
}