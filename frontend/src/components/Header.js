import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = (props) => {
    //deconstruct an object
    //const { title } = props "remove props from props.title"
    return (
        <Navbar bg="light" variant="light">
           <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        </Navbar>
    )

};
export default Header;