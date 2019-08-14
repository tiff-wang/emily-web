import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import 'navbar.scss'
import logo from 'assets/logo.png'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img id="navbar-logo" src={logo} alt='White Heron'/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} onClick={this.toggle} to="/">Philosophy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} onClick={this.toggle} to="/menu">Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} onClick={this.toggle} to="/shop">Shop</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} onClick={this.toggle} to="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavBar