import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { helpHttp } from "../helpers/helpHttp";
import TasksForm from "./TasksForm";
import TasksTable from "./TasksTable";
import Loader from "./Loader";
import Message from "./Message";
import TasksModal from "./TasksModal";

const TasksPage = () => {

  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null)

  let {user, folder} = useParams()

  let api = helpHttp();
  let url_filtered = `http://127.0.0.1:8000/core/tasks/?folder=${folder}`;
  let url = "http://127.0.0.1:8000/core/tasks";

  // ---- UseEffect to bring tasks
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url_filtered)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url_filtered]);

  // ---- function that create a new task
  const createData = async(data) => {
    
    let endpoint = `${url}/`;
    data.completed = false
    // If already exist any task
    if(db[0]){
      data.folder = db[0].folder
    } else{
      // If not, look for the folder ID
      async function getFolderId(){    
        var folderId = null 
        await helpHttp()
          .get(`http://127.0.0.1:8000/core/folders/?creator=${user}`)
          .then((res) => {
            if (!res.err) {
              let folderItem = res.filter((el) => el.name === folder);
              folderId = folderItem[0].id
            } else {
              console.log("error");
            }        
          });
        return folderId
      }
      let folderId = await getFolderId()
      data.folder = folderId
    }
    console.log("data:", data)

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(endpoint, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  // ---- function that update an existing task
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}/`;
    
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  // ---- function that delete an existing task
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}/`;

      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  // ---- handle click on "edit" that opens a modal
  const handleOnClick = (data) => {
    setSelectedTask(data);
  };

  // ---- handle when a task got checked 
  const handleChecked = (data) => {

    if(data.completed === false){
      data.completed = true
    } else{
      data.completed = false
    }

    updateData(data);
  };

  return (
    <div className="container mt-3">
      <h2>To-Do List ({folder})</h2>
      <article>
        
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <TasksTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            handleOnClick={handleOnClick}
            handleChecked={handleChecked}
          />
        )}
        <TasksForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {selectedTask && (
          <TasksModal
            task = {selectedTask}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </div>
  );
};

export default TasksPage;