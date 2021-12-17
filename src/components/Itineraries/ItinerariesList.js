import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router-dom';

export default function ItinerariesList(itineraries) {
    let navigate = useNavigate();

    return (
    <div className='text-center'>
    <h2 className='text-center'>Itineraries</h2>
    <p className='text-center'>Please find the itinerary that you would like to look at in the list below.</p>
    <Button 
   
    variant='secondary' 
    onClick={() => {navigate("/itineraries/add")
    }}>Add Itinerary</Button>
    <br/>
    <br/>
            <Container>
            <Row xs={1} md={2} className="g-4">
                {itineraries.itineraries.map((i) => (
                <Col>
                    <Card className='text-center'>  
                    <Card.Header>
                        <strong className="mr-auto">{i.user}</strong>
                    </Card.Header>
                        <Card.Body>
                            <p>Start Date: {""} {i.startdate.slice(0, 10)}</p>
                            Stages:
                            {i.stages.map((st) => (
                                <div>
                                    <p>Stage: {st.stage}</p>
                                    <p>Hostel: {st.hostel}</p>
                                    <p>Nights: {st.nights}</p>
                                </div>
                            ))}
                        </Card.Body>
                    <Card.Footer>
                    <Button
                    variant='secondary'
                    onClick={() => {navigate("/itineraries/new")}}>
                        Add Stage</Button>
                    <Button
                    variant='secondary'
                    >Edit Stage</Button>
                    </Card.Footer>
                    </Card>
                </Col>
                ))}
                </Row>
            </Container>
    </div>
    )
}

