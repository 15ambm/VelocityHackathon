import Card from 'react-bootstrap/Card'
import React from "react"



const CalendarFake = (props) => {
    return (

    <Card>
        
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.imagesrc} />
            <Card.Text>
            {props.text}
            </Card.Text>
            
        </Card.Body>
    </Card>

    )
}

export default CalendarFake