import React, { Component } from "react";
import Star from './Star';
import { v4 } from 'uuid';

class StarRating extends Component {

  // 1. Initialize a 'rating' state

  state = {
    rating: 0

  }


  // 2. Write a function that returns 5 Star components
  renderStars = () => {
    let stars = []
    for (let i = 0; i < 5; i++){
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          setRating = { () => this.handleSetRating(i+1) }
          key={i}
          />
      );
    }
    return stars
  }


  // 3. Write an event handler that updates the rating state
  //    Pass the function to a Star component via props
  handleSetRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 })
    } else {
      this.setState({ rating: rating })
    }
  }
  // This function works without clicking on 1 star to re-set star rating.
  // handleSetRating = (rating) => {
  //   this.setState({ rating: rating })
  // }

  render() {
    return (
      <ul className="course--stars">
        {/* 4. Render the Star components */}
        { this.renderStars() }
      </ul>
    );
  }
}

export default StarRating;
