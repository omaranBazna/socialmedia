import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from "react-router-dom"
export default function NavbarC({login, setLogin}){

const handleSignout=()=>{
setTimeout(()=>{
     alert("You log out ") 
      setLogin(false);
    },500)
  
}

  
   return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">mySocialApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link to="/"> <Nav.Link href="#features">Home</Nav.Link></Link>
           <Link to="/feed"> <Nav.Link href="#pricing">Feed</Nav.Link></Link>
             <Link to="/profile"> <Nav.Link href="#pricing">myProfile</Nav.Link></Link>
            
          </Nav>
          <Nav>
            {login && 
              <Nav.Link href="#signOut" onClick = {handleSignout}>Sign Out</Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}