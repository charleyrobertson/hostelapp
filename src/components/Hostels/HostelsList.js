import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default function HostelsList({hostels}) {
    let navigate = useNavigate();

  console.log(hostels);
 
    return(
        <div>
          <div>
                <h2>Hostels</h2>
                <h5>Please select a hostel from the page or search for a specific hostel.</h5>
                  <Container>
                    <Row xs={1} md={2} className="g-4">
                      {hostels.map((hostel) => (
                        <Col>
                          <Card>
                              <Card.Header>
                                  <strong className="mr-auto">{hostel.name}</strong>
                              </Card.Header>
                              <Card.Body>{hostel.description.slice(0, 150) + '...'}</Card.Body>
                              <Card.Footer>
                                  <Button 
                                  variant='secondary' 
                                  onClick={() => {navigate("/hostels/" + hostel.id)
                                  }}
                                  >
                                    Find out more...
                                  </Button>
                              </Card.Footer>
                          </Card>
                        </Col>
                      ))}
                      </Row>
                  </Container>
            </div>
        </div>

    )
}