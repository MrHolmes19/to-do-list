import React from 'react'

const TasksModal = ({updateData, dataToEdit, setDataToEdit, task}) => {
  
  const handleSubmit = (e) => {

    //e.preventDefault()
    var { taskname } = document.forms[1]
    task.name = taskname.value

    if (!taskname) {
      alert("Please write a task");
      return;
    } else {
      updateData(task)
      //window.history.back(1)
    }

  };

  return (    
    <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="taskLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title" id="taskLabelTitle">
                Editing Task "{task.name}"
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <input type="text" id="task" name="taskname" placeholder="New task name" 
                      defaultValue={task.name} className="form-control"/>   
                                 
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">Save</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TasksModal