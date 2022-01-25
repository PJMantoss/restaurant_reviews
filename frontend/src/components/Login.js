import React, { useState } from "react";

const Login = props => {
  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  return (
    <div className="App">
      Hello Universe!
    </div>
  );
}

export default Login;
