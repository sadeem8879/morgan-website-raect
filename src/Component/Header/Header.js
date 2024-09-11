// import { Navbar } from "react-bootstrap";
// import logo from "../../images/logo.png";
// import React from "react";
// import { Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import styles from "./header.module.css";
// function  AlignmentExample() {
//   return (
//     <>
//       <Navbar className="fixed-top  ps-3 pt-3 pb-3 header bg-light " expand="md" bg="">
//         <Navbar.Brand as={Link} to="/home">
//           <img src={logo} alt="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <nav className=" d-flex ms-auto ">
//             <Nav.Link as={Link} to="../pages/home/Home" className={styles.navlink}>HOME</Nav.Link>
//             <Nav.Link as={Link} to="/About"className={styles.navlink}>ABOUT</Nav.Link>
//             <Nav.Link as={Link} to="/Services"className={styles.navlink}>SERVICES</Nav.Link>
//             <Nav.Link as={Link} to="/Contact"className={styles.lastlink}>CONTACT US</Nav.Link>
//           </nav>
//         </Navbar.Collapse>
//       </Navbar>
   

//     </>
//   )
// }
// export default  AlignmentExample;
// In AlignmentExample.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './header.module.css';

function AlignmentExample() {
  return (
    <Navbar className="fixed-top ps-3 pt-3 pb-3 header bg-light" expand="md">
      <Navbar.Brand as={Link} to="/home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className={styles.navlink}>HOME</Nav.Link>
          <Nav.Link as={Link} to="/about" className={styles.navlink}>ABOUT</Nav.Link>
          <Nav.Link as={Link} to="/services" className={styles.navlink}>SERVICES</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={styles.lastlink}>CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AlignmentExample;
