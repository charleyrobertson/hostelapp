import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useParams,  useNavigate } from 'react-router-dom';

export default function AddItinerary() {
    let params = useParams();

    let navigate = useNavigate();
   
    console.log(params);

    const [startDateIn, setStartDate] = useState("");
    const [userIn, setUser] = useState("");
    
    const AddItinerary = async () => {
        const itin = {
            user: userIn,
            startDate: startDateIn,
            stages: []
        }

        const baseURL = "http://localhost:3000/itineraries/new/" + itin.user ;
        const rHeaders = {
        "Content-Type":"application/json",
        'Accept':'application/json',
        };
    
            await fetch(baseURL, {
                method: "GET",
                headers: rHeaders,
                });
                navigate("/itineraries");
                console.log(itin);
            };
    
        const handleStartDate =  (e) => {
            setStartDate(e.currentTarget.value);
        }
        
        const handleUser=  (e) => {
            setUser(e.currentTarget.value);
        }

        return (
            <div className='text-center'>
                <h3>Add an Itinerary</h3>
                <form>
                <label>
                    Name:
                    <input type="text" onChange={handleUser} value={userIn} />
                </label>

                <label>
                    Start Date:
                    <input type="date" onChange={handleStartDate} value={startDateIn} />
                </label>

                <br/>
                <Button 
                variant='secondary' 
                onClick={() => {AddItinerary()}}>
                Add
                </Button>
                </form>
            </div>
    
        )
    
}
