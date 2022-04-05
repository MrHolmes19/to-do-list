import React from "react";
import FoldersTableRow from "./FoldersTableRow";

const FoldersTable = ({ data, setDataToEdit, deleteData, user}) => {
  return (
    <div className="my-3">
      <table>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <FoldersTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                user={user}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FoldersTable;