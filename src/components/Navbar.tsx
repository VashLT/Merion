import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import logoPath from '../static/images/logo/merion-170x66.png';

export const MerionNavbar: React.FC<NavbarProps> = ({ theme }) => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg={theme} variant={theme} id="navbar">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logoPath}
                    width="140"
                    height="50"
                    className="d-inline-block align-center merion-logo"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Hogar</Nav.Link>
                    <Nav.Link href="/members">Miembros</Nav.Link>
                    <Nav.Link href="/labs">Labs</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#">Trabajo final</Nav.Link>
                    <Nav.Link eventKey={2} href="#">Proyecto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MerionNavbar;