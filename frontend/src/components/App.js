import React, { useState, useEffect, useRef } from 'react';
import MerionNavbar from './Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
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

    return (
        <div id="app">
            <div>
                <MerionNavbar theme="dark" />
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
                        <LabPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;