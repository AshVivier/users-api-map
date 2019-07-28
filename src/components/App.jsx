
import React, { Component } from 'react';
import Contacts from './Contacts';
// import { HashRouter as Router, Route } from 'react-router-dom'



class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }

  render() {
    return (


        <Contacts contacts={this.state.contacts} />

     
    )
  }
}


// var button = document.querySelector("button");

// button.addEventListener("click", () => {
//   window.parent.open('https://maps.google.com/?q=latitude-value,longitude-value')
//   });

export default App
