import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const initialForm = {
  id: null,
  name: ""
};

const FoldersForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      alert("Please write a task");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  
  return (
    <div>
      <div className="my-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="New folder"          
            onChange={handleChange}
            value={form.name}
          />
          <input type="submit" value="Add" className="mx-4"/>
        </form>
      </div>
      <div>
        <Link to = "/" 
          style={{ textDecoration: 'none', color:'crimson'  }}>
          {"<< Back"}
        </Link>
      </div>
    </div>
  );
};

export default FoldersForm;