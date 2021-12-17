import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default function HostelsList({hostels}) {
    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();

    console.log(hostels);
 
    return(
        <div className='text-center'>
          <div>
                <h2>Hostels</h2>
                <h5>Please select a hostel from the page or search for a specific hostel.</h5>
                <input 
                value={searchParams.get("filter") || ""}
                onChange={event => {
                  let filter = event.target.value;
                  if(filter) {
                    setSearchParams({filter});
                  } else {
                    setSearchParams({});
                  }
                }} />

                  <Container>
                    <Row xs={1} md={2} className="g-4">
                      {hostels.filter((hostels) => {
                        let filter = searchParams.get("filter");
                        if(!filter) return true;
                        let name = hostels.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                      })
                      .map(hostel => (
                        <Col>
                          <Card className='text-center'>  
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