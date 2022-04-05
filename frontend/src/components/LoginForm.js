import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginForm = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginUser, setLoginUser] = useState();

  // User Login info
  const database = [
    {
      username: "leandro",
      password: "123"
    },
    {
      username: "hernan",
      password: "123"
    },
    {
      username: "Shinji",
      password: "123"
    }
  ];
  
  // error message
  const errors = {
    username: "invalid username",
    password: "invalid password"
  };

  // JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // handle submit that compares username and password
  const handleSubmit = (event) => {

    event.preventDefault();
    
    var { username, password } = document.forms[0];
    
    // Find user login info
    const userData = database.find((user) => user.username === username.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
        setLoginUser(username.value)
      }
    } else {
      // invalid username
      setErrorMessages({ name: "username", message: errors.username });
  }

  };

  return (
    isSubmitted
    ? <Navigate to = {`/${loginUser}/folders`} />
    :
    <div>
      <div className="col mt-4 mb-5">
        <h1 className="text-center mb-5">Login</h1>    
        <div className="row text-center">  
          <div className="col-12 col-md-4 offset-md-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">User Name</label>
                <input type="text" className="form-control" id="inputName" name="username" required/>
                {renderErrorMessage("username")}
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" name="password" required/>
                {renderErrorMessage("password")}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm