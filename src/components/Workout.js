import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import React from 'react'
const Workout = () => {
    return (
        <React.Fragment>
            <CardColumns style={{ margin: '10px'}}>
                <Card className="bg-dark text-white" style={{ maxWidth: '50vw'}}>
                    <Card.Img src="https://unsplash.com/photos/F2qh3yjz6Jk/download?force=true" />
                    <Card.ImgOverlay>
                        <Card.Title>Yoga</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ maxWidth: '50vw'}}>
                    <Card.Img src="https://unsplash.com/photos/zbF-lW3k1QU/download?force=true" />
                    <Card.ImgOverlay>
                        <Card.Title>Arms</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ maxWidth: '50vw'}}>
                    <Card.Img src="https://unsplash.com/photos/L5Lt0e7Kjxc/download?force=true" />
                    <Card.ImgOverlay>
                        <Card.Title>Run</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ maxWidth: '50vw' }}>
                    <Card.Img src="https://unsplash.com/photos/u76Gd0hP5w4/download?force=true" />
                    <Card.ImgOverlay>
                        <Card.Title>Core</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </CardColumns>
        </React.Fragment>
    )
}

export default Workout