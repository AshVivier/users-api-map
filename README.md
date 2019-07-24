
USER STORIES 


As a user I:

Want to be able to view the details of all users

Want to be able to select a users address and be taken to that location on google maps.


..........................................................................................
STEPS TAKEN


Used the command create-react-app tech-test to start app with all needed dependencies

Slimmed down un neccisary files

Changed App component to jsx, cleared out, and created a fresh class component.

Created a Contacts.jsx component

Created a Map.jsx component

Linked bootstaps CND in the index, this way I can use the card style from the library 

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

Created a state in the App.jsx to store the out put from the API, and used a componentDidMount() method to fetch data from API


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
      

Created a const in contacts.js to render the data fetched from the API

 
     import React from 'react'
        const Contacts = ({ contacts }) => {
            return (
                <div>
                     <center><h1>Contact List</h1></center>
    
                          {contacts.map((contact) => (
                          <center>  <div class="card">
                              <div>
                                <h5>Name: {contact.name}</h5>

                                <h6>Email: {contact.email}</h6>

                                <button >Address: {contact.address.street}<br/>
                                {contact.address.suite} <br/> {contact.address.city}</button><br/>

                                <p>Website: {contact.website}</p>

                              </div>
                            </div></center>
                          ))}   
                          <Map/> 
                        </div> 
                      )
                    };
                    export default Contacts

    
Connected the components importing Contacts.jsx into App.jsx

 import React, { Component } from 'react';
 import Contacts from './components/contacts';
    
 Rendered Contacts in App.jsx
 
      render() {
        return (
          <Contacts contacts={this.state.contacts} />
        )
      }
    }
   
Added bootstrap styling to Contacts.jsx component
    

     return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
          <center>  <div class="card">
              <div class="card-body">
                <h5 class="card-title">Name: {contact.name}</h5>

                <h6 class="card-subtitle mb-2">Email: {contact.email}</h6>
              
                <button >Address: {contact.address.street}<br/>
                {contact.address.suite} <br/> {contact.address.city}</button><br/>

                <p class="card-text">Website: {contact.website}</p>
                
              </div>
            </div></center>
          ))}   
          <Map/> 
        </div> 
      )
    };
    
 Added BrowserRouter to index.js
 
     import { BrowserRouter } from 'react-router-dom';

     document.addEventListener('DOMContentLoaded', () => {
     ReactDOM.render(

        <BrowserRouter>
        <App />
        </BrowserRouter>,

        document.getElementById('root')
      )
     }
    )
    
Added Router to App.jsx


      render() {
        return (

              <Router>

                 <Contacts contacts={this.state.contacts} />

                 <Route exact path='/' component={this.state.Contacts} />

                 <Route path='/Map' component={Map}/>

              </Router> 
  
        )
        }
    }
    
Imported Link from react library and the Map.sx into Contacts.jsx

    import {Link} from 'react-router-dom'
    import Map from './Map'
    
Added a link to the Address in Contacts.JSX

    <Link to='./Map'><button >Address: {contact.address.street}<br/>
    {contact.address.suite} <br/> {contact.address.city}</button></Link><br/>
    
    
Installed google maps react using the command   npm install --save google-maps-react
     
Added google map to Map.jsx

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {Link} from 'react-router-dom'


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -41.097548,
         lng: 174.869463
        }}
      />
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.AIzaSyDe3hgpuy5UdubxL61Lz9KnX8GjVr4Pudk
  }
))(MapContainer)
     
Added a <Map /> to the bottom of contacts to test what I create renders as link is not working
        
    
