import React from 'react'
import { Link } from 'react-router-dom'

const Folder = ({folder, handleOnClick}) => {

  return (
    <div>
      <div className="row">
        <div className="col">
          - {folder.name}
        </div>
        <div className="col">
          {/* <a href="" onClick = {()=>handleOnClick(folder)}/> */}
          <Link to={`/folders/Leandro/${folder.name}`}> {folder.name} </Link>
        </div>
        <div className="col">
          <button className="asLink" onClick={()=>handleOnClick(folder)}> Remove </button>
        </div>
      </div>
    </div>  
  )
}

export default Folder