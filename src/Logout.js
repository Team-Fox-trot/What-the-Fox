import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from 'react-bootstrap/Button';

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default Logout;