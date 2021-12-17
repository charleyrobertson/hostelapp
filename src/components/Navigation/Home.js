import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
    return (
        <div>
        <div>
            <h2>Home</h2>
            <h4>Please refer to the small guide located on this page to find out how to use this application.</h4>
        </div>


            <Container class="container-fluid">
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card>
                    <Card.Header>
                        Finding a Hostel
                    </Card.Header>
                    <Card.Body>
                        <strong>Browsing Hostels</strong>
                        <p>Once navigated to the hostels page, all of the hostels will display with a short description of what they are. Click the button under the description of the hostel you are interested in to find out more.</p>
                        <strong>Searching Hostels</strong>
                        <p>Type in a hostel location that you are specifically looking for to find a hostel that is suitable for you.</p>
                        <strong>Reviewing a Hostel</strong>
                        <p>You can add reviews and view the ratings for hostels and check their ratings when you go to the hostel details.</p>
                    </Card.Body>
                    <Card.Footer>
                        <small>Click on the 'Hostels' button in the navigation bar to start.</small>
                    </Card.Footer>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Header>
                        Creating an Itinerary
                    </Card.Header>
                    <Card.Body>
                        <strong>Adding Stages</strong>
                        <p>Once navigated to the itineraries page, all of the hostels will display and they will be clickable to add to your itinerary. When adding, you will be able to select a start date for this stage.</p>
                        <strong>Editing Stages</strong>
                        <p>When editing a stage, you can change the start date to ensure that the information is correct if plans change.</p>
                        <strong>Deleting Stages</strong>
                        <p>When looking at your itinerary, if you decide you no longer wish to stay within a stage, you can delete it.</p>
                    </Card.Body>
                    <Card.Footer>
                        <small>Click on the 'Itineraries' button in the navigation bar to start.</small>
                    </Card.Footer>
                </Card>
                </Col>
            </Row>
            </Container>
        </div>
    )
}