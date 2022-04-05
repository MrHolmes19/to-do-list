import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Folder from './Folder';
import Loader from './Loader';

const FolderList = () => {

  //const [username, setUsername] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  let {user} = useParams()
  //setUsername(user)
  console.log(user)

  useEffect(() => {
    //if (search === null) return;

    const fetchData = async () => {
      //const {user_id} = search;

      let endpoint = `http://127.0.0.1:8000/core/folders/?creator=${user}`;
      //let endpoint = `http://127.0.0.1:8000/core/folders/?creator=${username}`;
      
      setLoading(true);

      const [folders] = await Promise.all([
        // helpHttp().get(endpoint),
        fetch(endpoint)
          .then((res) =>
            res.ok
              ? res.json()
              : Promise.reject({
                  err: true,
                  status: res.status || "00",
                  statusText: res.statusText || "Ocurrió un error",
                })
          )
          .catch((err) => (err))
      ]);

      setResponse(folders);
      setLoading(false);
    };

    fetchData();
    
  }, [user]);

  return (
    <div className = "container">
      <h1> Folders </h1>

      {loading && <Loader/>}
      
      {user && !loading && (
        response.map((folder) =>
          <Folder folder = {folder} key = {folder.id}/>          
        )
      )}
     
    </div>
  )
}

export default FolderList