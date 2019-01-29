import React, {Component} from 'react';
import {Navbar,Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Navbarc extends Component{
    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Job</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        About
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Shout out to me
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navbarc;