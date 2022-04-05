import React from "react";
import TasksTableRow from "./TasksTableRow";

const TasksTable = ({ data, setDataToEdit, deleteData, handleOnClick, handleChecked}) => {
  return (
    <div className="my-3">
      <table>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <TasksTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                handleOnClick={handleOnClick}
                handleChecked={handleChecked}
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

export default TasksTable;