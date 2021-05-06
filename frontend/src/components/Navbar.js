import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';

export default function MerionNavbar(props) {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg={props.theme} variant={props.theme} id="navbar">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="../static/images/merion-170x66.png"
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
    )
}