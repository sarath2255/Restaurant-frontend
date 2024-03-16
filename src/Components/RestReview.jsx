import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';




function RestReview({review}) {
    console.log(review);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Reviews
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {
                review?.map(item=>(

                    <ListGroup>
         <ListGroup.Item>Name :{item.name}</ListGroup.Item>
         <ListGroup.Item>Date:{item.date}</ListGroup.Item>
         <ListGroup.Item>Rating :{item.rating}</ListGroup.Item>
         <ListGroup.Item>Comments :{item.comments}</ListGroup.Item>
       </ListGroup>



                )
  
                    
                    )

    
            }

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default RestReview