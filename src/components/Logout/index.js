import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Nav from 'react-bootstrap/Nav';

const Logout = () => {
  const { logout, user } = useAuth0();

  return (
    <div className="logout-container">
      {user?.name && (
        <span className="username">{user.name}</span>
      )}
      <Nav.Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Nav.Link>
    </div>
  );
};

export default Logout;
