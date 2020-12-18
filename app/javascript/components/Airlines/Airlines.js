import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airline from './Airline';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // get all airlines & update state

    axios.get('/api/v1/airlines.json')
    .then( response => {
      setAirlines(response.data.data)
    })
    .catch( response => console.log(response))
  }, [airlines.length])


  const grid = airlines.map( airline => {
    return (
      <Airline
        attributes={airline.attributes}
        attributes={airline.attributes}
      />
    )
  })
  return (
    <div className="home">
      <div className="header">
        <h1>Open Flights</h1>
        <div className="subheader">sub header</div>
      </div>
      <div className="grid">
        <ul>{grid}</ul>
      </div>
    </div>
  )
}

export default Airlines