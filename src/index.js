import React from 'react';
import ReactDOM from 'react-dom';
import CreateEventForm from './components/CreateEventForm';
import Login from './components/Login';
import Content from './components/Content';
import EventDetail from "./components/EventDetail";
import NoMatch from "./components/NoMatch"
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
   <Router history={browserHistory}>
	    <Route path="/" component={Content}/>
	    <Route path="/event/:eventId" component={EventDetail}/>    
	   	<Route path="login" component={Login}/>
		<Route path="createEvent" component={CreateEventForm}/>
	   	<Route path="*" component={NoMatch}/>
  </Router>
  , document.getElementById('root')
);
