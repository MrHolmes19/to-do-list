import React from "react";
import { Link } from "react-router-dom";

const FoldersTableRow = ({ el, deleteData, user }) => {

  let { name, id } = el;

  return (
    <tr>
      <td><label className="ms-2 me-5">- {name}</label></td>
      <td>
        <Link to = {`/${user}/folders/${name}`} style={{ textDecoration: 'none', color:'blue' }} >View items</Link>
        <button className="asLink ms-3" onClick={() => deleteData(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default FoldersTableRow;