
export function Formulario(props) {
    const {tarea,handleSubmit,handleChange}=props
  return (
    <form onSubmit={handleSubmit}>
      <input id="inputTask" type="text" placeholder="Add a new task" onChange={handleChange} value={tarea}/>
      <input type="submit" className="btn" value="AGREGAR" onClick={handleSubmit}/>
    </form>
  )
}
