import React from 'react'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Restcard({restaurants}) {
    console.log(restaurants); //data
  return (
    <div>
       <Link to={`view/${restaurants.id}`} style={{textDecoration:'none'}}>
       <MDBCard className='mx-3 my-4' style={{height:'550px'}}>
      <MDBCardImage src={restaurants.photograph} height={'400px'} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{restaurants.name}</MDBCardTitle>
        <MDBCardText>
            {restaurants.address}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
       </Link>
    </div>
  )
}

export default Restcard