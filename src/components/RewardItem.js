import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from "react"


const RewardItem = (props) => {
    return (

    <div>
        
    <Card style={{ width: '18rem', margin: 25 }}>
        <Card.Img variant="top" src={props.imagesrc} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.text}
            </Card.Text>
            <Button variant="primary">Purchase</Button>
        </Card.Body>
    </Card>

    </div>
    )
}

export default RewardItem