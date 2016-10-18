import React, { Component } from 'react';
import SimpleDB from "../database/simpleDB.js"

import {Link} from "react-router";
import Navbar from "../components_utils/Navbar";
import StarRating from "../components_utils/StarRating";
import SearchBar from "../components_utils/SearchBar";
import RestaurantList from "../components_utils/RestaurantList";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {restaurants: SimpleDB.init()._restaurants, showHamburger: false, width:0 }
  }
  updateDimensions(){
    var  width = window.innerWidth;
    this.setState({width: width})
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions.call(this)
  }
  _filterByAlphabets(name){
    const filteredRestaurants = filterByAlphabets(name, SimpleDB.init()._restaurants)
    this.setState({restaurants: filteredRestaurants})
  }
  _cancelFilter(e){
    this.setState({restaurants: SimpleDB.init()._restaurants})
  }
 
  _filterByCategory(e){
    const restaurants = SimpleDB.init()._restaurants;
    var filteredRestaurants = restaurants.filter(r => {
      return r.category == e.target.value
    });
    if(e.target.value === "none") filteredRestaurants = restaurants;
    this.setState({restaurants: filteredRestaurants})
  }
  _sortBy(e){
    var order = "A";
    var field = e.target.value
    var restaurants = sortBy(field, order, this.state.restaurants);
    if(e.target.value === "none") restaurants = SimpleDB.init()._restaurants;
    this.setState({restaurants: restaurants.length > 0 ? restaurants : this.state.restaurants })
  }
  _hamburgerClick(e){
    e.preventDefault();
    this.setState({showHamburger: !this.state.showHamburger})
  }
  render() {
    const self = this;
    const Restaurants__loop = this.state.restaurants.map(r =>  <RestaurantList key={r.id} restaurant={r} width={this.state.width}/> )

    return (
      <div className="container" style={{paddingLeft:0}}>
      { (this.state.width > 770) ?
        <Navbar className="desktop"/> :
        <Navbar showBackButton={true} className="mobile"
                 RBSymbol={<i className="glyphicon glyphicon-menu-hamburger" onClick={self._hamburgerClick.bind(self)}></i>}
                 RBAria={"signup"}
                  RBAction={ this.signupWithBackHistory }/>
      }
        <main className="desktop">
          <label htmlFor="searchbar" >Search: </label>
          <div style={{position:"relative"}}>
            <SearchBar 
              style={{width: "100%", textIndent: 30, borderRadius: 5}}
              data={this.state.restaurants.map(r => r.name)}
              onEnterPress={this._filterByAlphabets.bind(this)}
              onChange={this._filterByAlphabets.bind(this)}
            />
            <i className="glyphicon glyphicon-search" style={{top:3, left:5, position:"absolute", fontSize:"20px"}}></i>
          </div>
          <SortAndFilter
             sortBy={this._sortBy.bind(this)}
             filterBy={this._filterByCategory.bind(this)}
             />
          <br />
          <ul className="list-group">
            {Restaurants__loop}
          </ul> 
        </main>  


        <main className="mobile">          
          <dropdown style={{display: this.state.showHamburger ? "inherit" : "none", width: "110%",
                            position: "fixed", top:50, zIndex:90}}
                            className="navbar-inverse navbar-nav">
              <div className="navbar-collapse" id="Hamburger-Menu" 
                   aria-label="dropdownMenu"
                   style={Object.assign({}, {marginTop: 0})}>
                <ul className="nav navbar-nav container" style={{listStyleType: "none", color: "White", fontSize: 20}}>
                  <li style={{marginBottom: 10}}><Link to="/signup">Signup</Link></li>
                  <li > 
                      <label htmlFor="sort" id="sortLabel"style={{marginLeft: 15, fontWeight: "normal"}}>sort By:</label>
                      <select name="sort" 
                              aria-label="sort restaurants"
                              role="button"
                              defaultValue="none" 
                              style={{marginLeft: 38}}
                              onChange={this._sortBy.bind(this)}>
                        <option role="option" value="none">none</option> 
                        <option role="option" value="name">name</option> 
                        <option role="option" value="ratings">ratings</option> 
                      </select>                      
                  </li>
                  <li>
                     <label htmlFor="category" style={{marginLeft: 15, fontWeight: "normal"}}>Category: </label>
                      <select name="category" 
                              defaultValue="none" 
                              aria-label="category restaurants"
                              style={{marginLeft: 20}}
                              onChange={this._filterByCategory.bind(this)}>
                        <option value="none">None</option> 
                        <option value="Restaurant">Restaurant</option> 
                        <option value="Hawker">Hawker</option> 
                        <option value="Chinese-Food">Chinese-Food</option> 
                        <option value="Truck-Food">Truck-Food</option> 
                        <option value="Fast-Food">Fast-Food</option> 
                      </select>
                  </li>
                </ul>
              </div>    
          </dropdown>

          <div className="row" style={{marginTop:70, position:"relative"}}>
            <ul className="list-group">
              {Restaurants__loop}
            </ul>
          </div> 
        </main>

      </div>
    );
  }
}


export default App;


const SortAndFilter = (props) => {
  return(
      <div className="row" style={{marginLeft: 5, marginTop: 10}}>
          <label htmlFor="sort">sort By:</label>
          <select name="sort" id="sort" 
                  aria-label="sort restaurants"
                  defaultValue="none" onChange={props.sortBy} aria-labelledBy="sort">
            <option value="none">none</option> 
            <option value="name">name</option> 
            <option value="ratings">ratings</option> 
          </select>
          &nbsp;
          <label htmlFor="category">Category: </label>
          <select name="category" id="category" 
                  aria-label="category restaurants"
                  defaultValue="none" onChange={props.filterBy} aria-labelledBy="category">
            <option value="none">None</option> 
            <option value="Restaurant">Restaurant</option> 
            <option value="Hawker">Hawker</option> 
            <option value="Chinese-Food">Chinese-Food</option> 
            <option value="Truck-Food">Truck-Food</option> 
            <option value="Fast-Food">Fast-Food</option> 

          </select>
      </div>
  )
}


function filterByAlphabets(name, restaurants){
    var filteredRestaurants = restaurants.filter(r => {
        //is it two words name??
        name = name.toLowerCase();
        var full_name = r.name.toLowerCase();
        var first_name = r.name.split(" ")[0].toLowerCase();
        var second_name = r.name.split(" ")[1];
        second_name = second_name ? second_name.toLowerCase() : undefined;
        if(second_name && second_name !== ""){
          return full_name.indexOf(name)===0 || first_name.indexOf(name) === 0 || second_name.indexOf(name) === 0
        } else {
          return full_name.indexOf(name)===0 || first_name.indexOf(name) === 0;
        }
    });

    return filteredRestaurants;
}

function sortBy(field, order, restaurants){
    var accepted_fields = ["name", "ratings", "comments_amount"];
    var result = [];
    if(accepted_fields.indexOf(field) < 0){
      return undefined;
    }
    if(order === "asc" || order === "A"){
      result = restaurants.sort((prev, next) => {
          if(field === "name"){
             if(prev.name < next.name) return -1;
             if(prev.name > next.name) return 1;
             return 0;
          }
          return prev[field] - next[field]
      })
    }
    if(order === "desc" || order === "D"){
      result = restaurants.sort((prev, next) => {
         if(field === "name"){
             if(prev.name > next.name) return -1;
             if(prev.name < next.name) return 1;
             return 0;
          }
          return next[field] - prev[field]
      })
    }

    return result;
}