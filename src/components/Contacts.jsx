import React from 'react'
// import { Link } from 'react-router-dom'

 // var button = document.querySelector("button");

  // button.addEventListener("click", () => {
  //   window.open('https://maps.google.com/?q=latitude-value,longitude-value')
  //   });



const Contacts = ({ contacts }) => {

  const url = new URL('https://example.com?');
  const params = new URLSearchParams(url.search)
  params.append("{contact.address.geo.lat},{contact.address.geo.lat}");

  return (  

    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => (
        <center>  <div class="card">
          <div className="card-body">
            <h5 className="card-title">Name: {contact.name}</h5>

            <h6 className="card-subtitle mb-2">Email: {contact.email}</h6>

            <button>Address: {contact.address.street}<br />
              {contact.address.suite} <br /> {contact.address.city}</button>
              
              {/* <input type='button' onClick={window.open('https://maps.google.com/?q=')} value='click here to visit home page' ></input> */}

            <p className="card-text">Website: {contact.website}</p>

          </div>
          {/* {contact.address.geo.lat} */}
        </div></center>
      ))}

    </div>
  
  )
};



export default Contacts