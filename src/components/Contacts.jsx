import React from 'react'

              function Contacts ({ contacts }){
                function openGoogleMaps(contact) {
                  console.log(`openGoogleMaps ${JSON.stringify(contact)}`)
                  window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)
                }
                
                return (  
                  <div>
                    <center><h1>Contact List</h1></center>
                    {contacts.map((contact) => (
              
                      <center>  <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Name: {contact.name}</h5>
              
                          <h6 className="card-subtitle mb-2">Email: {contact.email}</h6>
              
                          <button id="myBtn" onClick={(e) => openGoogleMaps(contact)} >Address: {contact.address.street} <br />
                            {contact.address.suite} <br /> {contact.address.city}</button>
              
                          <p className="card-text">Website: {contact.website}</p>
              
                        </div>
                        
                      </div></center>
                    ))}
              
                  </div>
                )                               
              };
              
              export default Contacts

              // // document.getElementById("myBtn").addEventListener("click",  () => {
// //   window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)
// // })

// function Contacts ({ contacts }){

//   return (  
//     <div>
//       <center><h1>Contact List</h1></center>
//       {contacts.map((contact) => (

//         <center>  <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Name: {contact.name}</h5>

//             <h6 className="card-subtitle mb-2">Email: {contact.email}</h6>

//             <button id="myBtn">Address: {contact.address.street}<br />
//               {contact.address.suite} <br /> {contact.address.city}</button>

//             <p className="card-text">Website: {contact.website}</p>

//           </div>
          
//         </div></center>
//       ))}

//     </div>
//   )                               
// };

// export default Contacts


//  <input type='button' onClick={window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)} value='click here to go to Google maps location' ></input> 


// onLinkClicked =()=>{
  //  window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)
  // },


// var button = document.querySelector("button")

// button.addEventListener("click", () => {
//    window.open('https://maps.google.com/?q='+contacts.address.geo.lat+","+contacts.address.geo.lng)
// })
      


{/* <button onClick={window.open('https://maps.google.com/?q='+contact.address.geo.lat+","+contact.address.geo.lng)}>Address: {contact.address.street}<br />
              {contact.address.suite} <br /> {contact.address.city}</button> */}

              // import React from 'react'