import React from 'react'
import {Link} from 'react-router-dom'
import Map from './Map'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
          <center>  <div class="card">
              <div class="card-body">
                <h5 class="card-title">Name: {contact.name}</h5>

                <h6 class="card-subtitle mb-2">Email: {contact.email}</h6>
              
                <Link to='./Map'><button ><h7 class="card-subtitle mb-2 text-muted">Address: {contact.address.street}<br/>
                {contact.address.suite} <br/> {contact.address.city}</h7></button></Link><br/>

                <p class="card-text">Website: {contact.website}</p>
                
              </div>
            </div></center>
          ))}   
          <Map/> 
        </div> 
      )
    };

    


    export default Contacts