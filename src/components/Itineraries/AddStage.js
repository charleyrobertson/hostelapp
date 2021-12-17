import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useParams,  useNavigate } from 'react-router-dom';

export default function AddStage() {
    let params = useParams();
    let user = params.user;
    let navigate = useNavigate();
   
    console.log(params);

    const [hostelIn, setHostel] = useState("");
    const [nightsIn, setNights] = useState("");
    const baseURL = "http://localhost:3000/itineraries/stages/new/" + "Alice";
    const rHeaders = {
        "Content-Type":"application/json",
        'Accept':'application/json',
    };
    
    const addStage = async () => {
        const st = {
            hostel: hostelIn,
            nights: nightsIn
        }
    
                 await fetch(baseURL, {
                method: "POST",
                headers: rHeaders,
                body: JSON.stringify(st),
                });
                console.log(st);
                navigate("/itineraries/");
            };
       
    
        const handleHostel =  (e) => {
            setHostel(e.currentTarget.value);
        }
    
        const handleNights=  (e) => {
            setNights(e.currentTarget.value);
        }


        return (
            <div className='text-center'>
                <h3>Add a Stage</h3>
                <form>
                <label>
                    Hostel:
                    <input type="text" onChange={handleHostel} value={hostelIn} />
                </label>
                <br />
                <label>
                    Nights:
                    <input type="text" onChange={handleNights} value={nightsIn}/>
                </label>
                <br/>
                <Button 
                variant='secondary' 
                onClick={() => {addStage()}}>
                Add Stage
                </Button>
                </form>
            </div>
    
        )
    
}



