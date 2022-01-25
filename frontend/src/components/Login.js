import React, { useState } from "react";

const Login = props => {
  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="submit-form">
      Hello Universe!
    </div>
  );
}

export default Login;
