import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LabsPage from './pages/LabsPage';
import MembersPage from './pages/MembersPage';
import LabPage from './pages/LabPage';

import MerionNavbar from './components/Navbar';
import ScrollUp from './components/Other/ScrollUp';

import './static/scss/App.scss';

const App: React.FC = () => {
  return (
    <div id="app">

      <Router>
        <header>
          <MerionNavbar theme="dark" />
        </header>
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
      <ScrollUp />
    </div>
  );
}

export default App;
