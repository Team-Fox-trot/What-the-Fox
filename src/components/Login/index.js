import { useAuth0 } from "@auth0/auth0-react";
// import Button from 'react-bootstrap/Button';
import React from "react";
import Nav from 'react-bootstrap/Nav';


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <Nav.Link onClick={() => loginWithRedirect()}>Login</Nav.Link>;
  // return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default Login;