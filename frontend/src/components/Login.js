import React, { useState } from "react";

const Login = props => {
  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    
  };

  return (
    <div className="App">
      Hello Universe!
    </div>
  );
}

export default Login;
