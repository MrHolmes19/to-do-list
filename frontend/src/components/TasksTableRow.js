import React, { useState } from "react";

const TasksTableRow = ({ el, deleteData, handleOnClick, handleChecked }) => {
  
  let initialChecked = el.completed
  const [checked, setChecked] = useState(initialChecked)

  let { name, id } = el;

  const ToggleChecked = (e) =>{
    setChecked(!checked)
    handleChecked(el)
  }

  return (
    <tr>
      <td>
        <input type="checkbox" id={`taskItem${id}`} name="checkbox" onChange={(e) => ToggleChecked(e)} checked={checked}/>
      </td>
      <td><label htmlFor={`taskItem${id}`} className="ms-2 me-5">{name}</label></td>
      <td>
        {/* <button className="btn btn-link" onClick={() => setDataToEdit(el)}>Editar</button> */}
        <button type="button" className="asLink" data-bs-toggle="modal" 
          data-bs-target="#taskModal" onClick = {()=>handleOnClick(el)}>
          Edit
        </button>
        <button className="asLink ms-3" onClick={() => deleteData(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default TasksTableRow;