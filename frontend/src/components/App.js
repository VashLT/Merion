import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';
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
        <div className="App">
            <header className="section page-header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src="../static/images/merion-170x66.png"
                            width="170"
                            height="66"
                            className="d-inline-block align-center"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/members">Members</Nav.Link>
                        <Nav.Link href="/labs">Labs</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </header>
            <div style={{ marginTop: "50px" }}>
                <Router>
                    <Switch>
                        <Route exact path='/'></Route>
                        <Route path='/members'>
                            <MembersPage />
                        </Route>
                        <Route path='/labs'>
                            <LabsPage />
                        </Route>
                        <Route exact path='/labs/:labId'>
                            <LabPage id={parseInt(1)} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;