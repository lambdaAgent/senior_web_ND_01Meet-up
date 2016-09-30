var fs = require('fs');
var moment = require("moment");


// ------------------------------------------
//     ADD LIMIT COMMENTS TO RESTAURANTS
// ------------------------------------------

fs.readFile("./Restaurant_data.json", "utf-8", (err, restaurant) => {
	var jsonrestaurant = JSON.parse(restaurant)
	console.log(Array.isArray(jsonrestaurant))

	var newRestaurant = jsonrestaurant.map(r => {
		r.category = randomPickCategory();
		r.comments = []
		return r
	});
	var jsonResult = JSON.stringify(newRestaurant)
	fs.writeFile("restaurant.json", jsonResult, (err) => {
		console.log("err", err)
	})
});

// -------------------------------------
//     ADD COMMENTS TO RESTAURANTS
// -------------------------------------

function randomPickCategory(){
	var categories = ["Cafe", "Restaurant", "Fast-Food", "Chinese-Food", "Hawker", "Truck-Food"];
	var randomIndex = Math.floor(Math.random() * 6 + 1);

	return categories[randomIndex];
}

fs.readFile("./restaurant.json", "utf-8", (err,jsonrestaurant ) => {
	fs.readFile("./comments_data.json", "utf-8", (err,jsoncomments ) => {
		var restaurants = JSON.parse(jsonrestaurant);
		var comments = JSON.parse(jsoncomments);

		//push to comments, but check for the length
		var resultRestaurant = restaurants.map(r => {
			var ratingsResult = 0;
			var ratingsPopulation = Number(r.comments_amount);
			var r_id = r.id;
			r.id = "restaurant-" + r_id

			for(var i=0; i < r.comments_amount; i++){
				var pickComment = pick_edited_comments(comments)
				r.comments.push(pickComment);
				ratingsResult += pickComment.ratings;
			}
			r.ratings = (ratingsResult / ratingsPopulation).toFixed(2);
			return r
		});


		var jsonResult = JSON.stringify(resultRestaurant);
		fs.writeFile("editedRestaurant.json", jsonResult, (err) => {
			console.log("err",err)
		})

	})
})

function reformatAndConvertToUnix(date, time){
	var splitDate = date.split("/")
	var formatedDate = splitDate[2]+"-"+digitizeTo10(splitDate[0])+"-"+digitizeTo10(splitDate[1]);
	var formatted = formatedDate + "T"+time
	var unix = moment(formatted).valueOf();
	// console.log("unix", unix);
	return unix

}

function pick_edited_comments(comments){
	var randomIndex = Math.floor(Math.random() * 50)
	var _comment = comments.splice(randomIndex, 1)[0];
	// console.log("_comment", _comment)
	_comment.commentedAt = reformatAndConvertToUnix(_comment.comment_date, _comment.comment_time); 
	delete _comment.comment_date;
	delete _comment.comment_time;
	return _comment
}
function digitizeTo10(str){
	if(Number(str) < 10){
		return "0" + str
	}
	return str
}


// -------------------------------------
// 		CALCULATE AVERAGE RATING
// -------------------------------------

// fs.readFile("./editedRestaurant.json", "utf-8",(err, jsonRestaurants) => {
// 	console.log("here1",jsonRestaurants)
// 	var restaurants = JSON.parse(jsonRestaurants);
// 	console.log("here1")
// 	var restaurantsWithAvgrating = restaurants.map(r => {
// 		var totalRatings = 0;
// 		var totalComments= r.comments.length;
// 		r.comments.map(c => {
// 			totalRatings += c.ratings
// 		});
// 		r.ratings = (totalRatings/totalComments).toFixed(2)
// 		return r;
// 	})

// 	var finalRestaurant_json = JSON.stringify(restaurantsWithAvgrating)
// 	fs.writeFile("finalResaturant.json", finalRestaurant_json, (err) => {
// 		console.error(err)
// 	})
// });
