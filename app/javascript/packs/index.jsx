import React from 'react'
import ReactDOM, { render } from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => {
  return (
    <div>Hello {props.name}!</div>
  );
}

Hello.defaultProps = {
  name: "Abe Index"
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="Abe Index" />,
    document.body.appendChild(document.createElement('div')),
  )
})


// // Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// // like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// // of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import App from '../components/App'
// import {BrowserRouter as Router} from 'react-router-dom'


// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Router path="/" component={App}>
//     </Router>,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
