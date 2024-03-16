import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from './Restcard';




function AllRest() {
  const base_url ="https://rest-backend-e3cw.onrender.com/restaurants"

  const [AllRestDta,setAllRestData]=useState([])

    const fetchData =async()=>{
      const result = await axios.get(base_url)
      console.log(result.data);//(array 10)
      setAllRestData(result.data)
    }
    console.log(AllRest);

    useEffect(()=>{
      fetchData()
    },[])


  return (
    <div>
      
      <Row>
        {
          AllRestDta.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <Restcard restaurants={item}/>

            </Col>
          ))

        }

      </Row>
      
    </div>
  )
}

export default AllRest