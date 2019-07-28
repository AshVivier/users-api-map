import React from 'react'
// import { Link } from 'react-router-dom'

const Contacts =({ contacts })=>{

  return (  

    <div>
      <center><h1>Contact List</h1></center>
      {contacts.map((contact) => (

        <center>  <div className="card">
          <div className="card-body">
            <h5 className="card-title">Name: {contact.name}</h5>

            <h6 className="card-subtitle mb-2">Email: {contact.email}</h6>

            {/* <button onClick={this.onLinkClicked.bind()}>Address: {contact.address.street}<br />
              {contact.address.suite} <br /> {contact.address.city}</button> */}

            {/* <button onClick={window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)}>Address: {contact.address.street}<br />
              {contact.address.suite} <br /> {contact.address.city}</button> */}

            <p className="card-text">Website: {contact.website}</p>

          </div>
          {/* {contact.address.geo.lat} */}
        </div></center>
      ))}

    </div>
  )                               
};

export default Contacts

// {/* <input type='button' onClick={window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)} value='click here to visit home page' ></input> */}

//   const url = new URL('?');
//   const params = new URLSearchParams(url.search)
//   params.append("{contact.address.geo.lat}","{contact.address.geo.lat}");


  //  {/* <input type='button' onClick={window.open('https://maps.google.com/?q=')} value='click here to visit home page' ></input> */}


 // var button = document.querySelector("button");

  // button.addEventListener("click", () => {
  //   window.open('https://maps.google.com/?q=latitude-value,longitude-value')
  //   });

    // onLinkClicked =()=>{
          //  window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)
          // },

          //  var button = document.querySelector("button");
//  button.addEventListener("click", () => {
//     window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)