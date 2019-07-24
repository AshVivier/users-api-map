
import React, { Component } from 'react';
import Contacts from './Contacts';
import { HashRouter as Router, Route } from 'react-router-dom'
import Map from './Map'

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



      <Router>

        <Contacts contacts={this.state.contacts} />

        <Route exact path='/' component={this.state.Contacts} />

        <Route path='/Map' component={Map} />

      </Router>


    )
  }
}

export default App
