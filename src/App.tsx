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
import FinalProjectPage from './pages/FinalProjectPage';

const App: React.FC = () => {
  return (
    <div id="app">

      <Router>
        <header>
          <MerionNavbar theme="dark" />
        </header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/members' component={MembersPage} />
          <Route exact path='/labs' component={LabsPage} />
          <Route exact path='/labs/:labId' component={LabPage} />
          <Route exact path="/project" component={FinalProjectPage} />
        </Switch>
      </Router>
      <ScrollUp />
    </div>
  );
}

export default App;
