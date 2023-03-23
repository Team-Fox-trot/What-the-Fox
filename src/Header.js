import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';

class Header extends React.Component {
  render() {
    return (
      // <>
      <Navbar bg="" variant="dark">
        <Container>
          <Nav className="color-nav">
            <Nav.Link href="/">Home</Nav.Link>
            {this.props.auth0.isAuthenticated && <Nav.Link href="/favorites">Faves</Nav.Link>}
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            {this.props.auth0.isAuthenticated ? <Logout/> : <Login/>}
            {/* <Nav.Link href="#login">Login</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      /* <Login />
      <Logout /> */
      // </>
    )
  }
}

export default withAuth0(Header);