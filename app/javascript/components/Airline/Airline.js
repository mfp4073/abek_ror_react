import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import ReviewForm from './ReviewForm';
import Review from './Review';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: 10px;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child{
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`
    // api/v1/airlines/unite-airlines
    // airlines/united-airliens
    //http://localhost:3000/api/v1/airlines/united-airlines
    axios.get(url)
    .then(response => {
      setAirline(response.data);
      setLoaded(true);
    })
    .catch(response => console.log(response) )
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setReview({...review, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector(`[name=csrf-token]`).content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    const airline_id = airline.data.id
    axios.post(`/api/v1/reviews`, {review, airline_id})
    .then(response => {
      const included = [...airline.included, response.data.data];
      setAirline({...airline, included});
      setReview({title: '', description: '', score: 0});
    })
    .catch(response => {})
    }

    const setRating = (score, e) => {
      e.preventDefault();
      setReview({...review, score})
    }


  let reviews

  if( loaded && airline.included ) {
    reviews = airline.included.map( (item, index) => {
      return (
        <Review
          key={index}
          attributes={item.attributes}
        />
      )
    })
  }


  return (
    <Wrapper>
      {
        loaded && // right hand operator
        <Fragment>
          <Column>
            <Main>
                <Header
                  attributes={airline.data.attributes}
                  reviews={airline.included}
                />
            </Main>
            {reviews}
          </Column>
          <Column>
            <ReviewForm
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Airline


// 23 MINUTES INTO PART 3 DEC 20