import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { helpHttp } from "../helpers/helpHttp";
import FoldersForm from "./FoldersForm";
import FoldersTable from "./FoldersTable";
import Loader from "./Loader";
import Message from "./Message";

const FoldersPage = () => {

  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let {user} = useParams()

  let api = helpHttp();
  let url_filtered = `http://127.0.0.1:8000/core/folders/?creator=${user}`;
  let url = "http://127.0.0.1:8000/core/folders";

  // ---- UseEffect to bring Folders
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url_filtered)
      .then((res) => {
        //console.log(res);
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
  const createData = (data) => {
    
    let endpoint = `${url}/`;
    data.creator = db[0].creator

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(endpoint, options).then((res) => {
      //console.log(res);
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
      `¿Estás seguro de eliminar la carpeta con el id '${id}'?`
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
      <h2>Folders</h2>
      <article>
        
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <FoldersTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            handleChecked={handleChecked}
            user={user}
          />
        )}
        <FoldersForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
};

export default FoldersPage;