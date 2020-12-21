
import React from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   padding: 50px 100px 50px 0px;
//   font-size: 30px;

//   img{
//     height: 60px;
//     width: 60px;
//     border-radius: 100%;
//     border: 1px solid rgba(0,0,0,0.1);
//     margin-bottom: -8px;
//   }
// `
// const TotalReviews = styled.div`
// font-size: 18px;
// padding: 10px 0;
// `

// const TotalOutOf = styled.div`
// font-weight: bold;
// font-size: 18px;
// padding: 10px 0;
// `


const ReviewForm = (props) => {
  // const { name, image_url, avg_score } = props.attributes;
  // const total = props.reviews.length;
  return (
    <div className="wrapper">
      <form>
        <div>Have an experience with AIRLINE? Share your experience </div>
        <div className="field">
          <input type="text" name="title" placeholder="Revew Title"/>
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Revew Despriction"/>
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this airline</div>
            STARS HERE
          </div>
        </div>
        <button type="submit">submit review</button>
      </form>

    </div>
  )
}

export default ReviewForm;