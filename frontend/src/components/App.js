import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import HomePage from './HomePage';
import LabsPage from './LabsPage';
import MembersPage from './MembersPage';
import LabPage from './LabPage';

function App() {
    const [loaded, setLoaded] = useState(Boolean);

    const loader = () => {
        setLoaded(true)
    }

    // var { labId } = useParams();
    // console.log(labId);

    return (
        <div id="app">
            <div>
                <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" id="navbar">
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
            </div>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/members'>
                        <MembersPage />
                    </Route>
                    <Route exact path='/labs'>
                        <LabsPage />
                    </Route>
                    <Route exact path='/labs/:labId'>
                        <LabPage id={parseInt(1)} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;