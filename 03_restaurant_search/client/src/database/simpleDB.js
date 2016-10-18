"use strict";
var Restaurant = require("./FinalRestaurants.js");

var SimpleDB = {
	_restaurants: Restaurant,
	init(){
		this._restaurants = Restaurant;
		return this;
	},
	calcAndMutateRating(restaurant){
		var totalRatingsSum = restaurant.comments.reduce((a,b) => {
			console.log("a", a)
			console.log("b",b)
			return {ratings: Number(a.ratings) + Number(b.ratings)}
		}, {ratings:0});
		console.log("simpleDB ",totalRatingsSum);
		var avg =  totalRatingsSum.ratings / restaurant.comments.length;
		restaurant.ratings = avg.toFixed(1);
	},
	replaceRestaurant(restaurants){
		if(Array.isArray(restaurants)&& restaurants.length > 0){
			this._restaurants = restaurants
			return true;
		}
		return false;
	},
	getRestaurantById(id){
		if(!this._restaurants || this._restaurants.length <= 0) return undefined;
		return this._restaurants.filter(r => r.id === id)[0]
	},
	addReview(R_id,review){
		var restaurant = this.getRestaurantById(R_id);
		
		if(review === "") return new Error("Please fill the review");
		if(!restaurant) return new Error("restaurant cannot be found");
		
		restaurant.comments.push(review);
		this.calcAndMutateRating(restaurant)
		return true;
	}
}


module.exports = SimpleDB.init();