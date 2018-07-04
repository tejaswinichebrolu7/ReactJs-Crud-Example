import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Hackathon from './components/Hackathon';
import DeleteHackathon from './components/DeleteHackathon';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/hackathon' component={Hackathon} />
        <Route path='/edit/:id' component={Hackathon} />
        <Route path='/show/:id' component={Hackathon} />
        <Route path='/delete/:id' component={DeleteHackathon} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
