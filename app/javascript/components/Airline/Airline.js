import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import ReviewForm from './ReviewForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
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
    console.log("PROPS: ", props)
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`
    // api/v1/airlines/unite-airlines
    // airlines/united-airliens
    //http://localhost:3000/api/v1/airlines/united-airlines
    axios.get(url)
    // .then(response => console.log("RETURNED: ", response) )
    .then(response => {
      console.log("RETURNED: ", response.data)
      setAirline(response.data);
      setLoaded(true);
    })
    .catch(response => console.log(response) )
  }, [])

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
          <div className="reviews"></div>
          </Column>
          <Column>
            <ReviewForm></ReviewForm>
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Airline


// 23 MINUTES INTO PART 3 DEC 20