import React from 'react';
import ReactDOM from 'react-dom';
import ContentForm from './components/ContentForm';
import Login from './components/Login';
import Content from './components/Content';
import EventDetail from "./components/EventDetail";
import NoMatch from "./components/NoMatch"
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
   <Router history={browserHistory}>
	    <Route path="/" component={Content}/>
	    <Route path="/event/:eventId" component={EventDetail}/>    
	   	<Route path="login" component={Login}/>
		<Route path="contentForm" component={ContentForm}/>
	   	<Route path="*" component={NoMatch}/>
  </Router>
  , document.getElementById('root')
);
