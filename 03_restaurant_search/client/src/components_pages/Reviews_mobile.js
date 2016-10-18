//MOBILE ONLY

/* Library */
import React, { Component } from 'react';
import {Link, browserHistory} from "react-router";
import DB from "../database/simpleDB.js";


/* Components_utils */
import Navbar from "../components_utils/Navbar";
import Backbutton from "../components_utils/Backbutton";
import Review from "../components_utils/Review";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {reviews: DB.getRestaurantById(this.props.params.restaurantId).comments}
  }
  addReview(e){
        e.preventDefault();
        browserHistory.push("/addReview/" + this.props.params.restaurantId)
    }
  render() {
    const props= this.props;
    const reviews = this.state.reviews || [];
    const reviewers = reviews.sort((a,b) => b.commentedAt - a.commentedAt)
                             .map(r => <Review key={r.id} review={r}/> );
    return (
      <div className="">
        <Navbar />


        <main className="" style={{margin: "0 auto"}}>
         <Navbar showBackButton={true}
                RBSymbol={<i className="glyphicon glyphicon-edit"></i>}
                RBAria={"add Review"}
                RBAction={this.addReview.bind(this) }/>
          <ul className="reviewList" style={{marginTop: 70}}>
            {reviewers}
          </ul>
        </main>

        
      </div>
    );
  }
}

export default App;