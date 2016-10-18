import React from 'react';
import ReactDOM from 'react-dom';
import App from './components_pages/App';
import RestaurantDetail from "./components_pages/RestaurantDetail";
import Reviews_mobile from './components_pages/Reviews_mobile';
import AddReview_mobile from './components_pages/AddReview_mobile';

import Login from "./components_pages/Login.js";
import NoMatch from "./components_pages/NoMatch.js";


import './index.css';
import "./style/starRating.css";
import "./style/animation.css";
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
   <Router history={browserHistory} >
	    <Route path="/" component={App}/>
	    <Route path="/restaurant/:restaurantId" component={RestaurantDetail}/>
	    <Route path="/signup" component={Login}/>

		{/*MOBILE ONLY*/}
		<Route path="/review_mobile/:restaurantId" component={Reviews_mobile}/>
   	    <Route path="/addReview/:restaurantId" component={AddReview_mobile}/>



  		<Route path="*" component={NoMatch}/>
  </Router>
  , document.getElementById('root')
);

