
export function Formulario(props) {
    const {tarea,handleSubmit,handleChange}=props
  return (
    <form onSubmit={handleSubmit}>
      <input id="inputTask" type="text" placeholder="Add a new task" onChange={handleChange} value={tarea}/>
      <i className="bi bi-plus-square-fill fs-4"  onClick={handleSubmit}/>
      
    </form>
  )
}
