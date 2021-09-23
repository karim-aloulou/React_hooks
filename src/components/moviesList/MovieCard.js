import React from 'react'
import {Card, Button} from "react-bootstrap"


const MovieCard = ({movie:{posterUrl, title, description, rate, id}}) => {
    return (
        <Card style={{ width: '18rem', marginBottom:"40px" }}> 
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <p> {rate} </p>
            </Card.Body>
            <Button variant='light'>
            
            </Button>
        </Card>
    )
}


export default MovieCard
