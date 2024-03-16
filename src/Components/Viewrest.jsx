import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';



function Viewrest() {

  // get the id of particular restaurant
  
  // const pathparams=useParams()
  // console.log(pathparams.id);
  //returns an object of key/value pairs of the dynamic params from the current url
// destructuring
const {id}=useParams()
console.log(id);//

  const base_url ="https://rest-backend-e3cw.onrender.com/restaurants"

  const [restDetails,setRestDetails]=useState({})


  //Api call to fetch the particular restaurant details

  const fetchRestDetails =async()=>{
    const results=await axios.get(`${base_url}/${id}`)
    console.log(results.data);
    setRestDetails(results.data)

  }
  console.log(restDetails);

  useEffect(()=>{
    fetchRestDetails()
  },[])

  
  return (
    <div>
      <Row>
        <Col>
        <img src={restDetails.photograph} width={'450px'} height={'550px'} className='m-4' alt="" />
        </Col>
        <Col>
        <ListGroup>
        <h1 style={{textShadow:'3px 3px white'}}>{restDetails.name}</h1>
      <ListGroup.Item>Address :{restDetails.address}</ListGroup.Item>
      <ListGroup.Item>Cuisine_type: {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Neighborhood : {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview review={restDetails.reviews}/></ListGroup.Item>
    </ListGroup>
        </Col>

      </Row>

    </div>
  )
}

export default Viewrest