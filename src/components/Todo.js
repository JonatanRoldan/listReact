import {useState} from "react";

export default function Todo({item, onUpdate, onDelete,onComplet}){
    const [edit, setEdit] = useState(false);
    console.log(item)
    function FormEdit(){
        const [newValue, setNewValue] = useState(item.title)
        function handleSubmit(e){
            e.preventDefault();
        }
    
    function handleChange(e){
        const value = e.target.value;
        setNewValue(value)
    }

    function handleClick(){
        onUpdate(item.id, newValue)
        setEdit(false)
    }
        return (
            <form className="todoUpdate" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
                <i className="bi bi-arrow-clockwise" onClick={handleClick}></i>
            </form>
        )
    }
    

function TodoElement(){
  return <div className="todoInfo">
    <i className="bi bi-file-check" onClick={() => onComplet(item.id)}/>
    <e className={item.completado ? 'true' : ''}>
        <span className="tarea">{item.tarea}</span>
    </e>
    <i className="bi bi-pencil" onClick={() => setEdit(true)}></i>
    <i className="bi bi-trash3" onClick={(e) => onDelete(item.id)}></i>
    
  </div>    
}

    return <div className="todo">{edit ? <FormEdit/> : <TodoElement/>}</div>
}