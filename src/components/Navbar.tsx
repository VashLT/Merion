import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom'

import logoPath from '../static/images/logo/merion-170x66.png';

export const MerionNavbar: React.FC<NavbarProps> = ({ theme }) => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg={theme} variant={theme} id="navbar">
            <Link to="/">
                <img
                    alt=""
                    src={logoPath}
                    width="140"
                    height="50"
                    className="d-inline-block align-center merion-logo"
                />{' '}
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/members" className="nav-link" >Miembros</Link>
                    <Link to="/labs" className="nav-link" >Labs</Link>
                    <Link to="/project" className="nav-link">Proyecto</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MerionNavbar;