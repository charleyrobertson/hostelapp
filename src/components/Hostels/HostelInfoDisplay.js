import React, { useState, useEffect, useCallback } from 'react';
import Reviews from './Reviews';
import { useNavigate, useParams } from "react-router-dom";

export default function HostelDisplay()
{
    let params = useParams();
    let id = parseInt(params.id, 10);
    let fetchURL = "http://localhost:3000/hostels/" + id;
    console.log(fetchURL);

    const fetchHostel = useCallback(() => {
        fetch(fetchURL)
        .then((res) => res.json())
        .then((data) => {
            setHostel(data[0]);
        })
    }, [fetchURL])

    const [hostel, setHostel] = useState([
        {
          id: "",
          name: "",
          address: "",
          postcode: "",
          phone: "",
          email: "",
          description: "",
          location: { lat: 0, long: 0 },
          ratings: [],
          reviews: [
            {
              reviewer: "",
              review: "",
            },
          ],
        },
      ]);
  
      useEffect(() => {
        fetchHostel(); 
      }, [fetchHostel]);  

    return(
        <div>
            <h1>Hostel Information</h1>
             <div> 
                 <h2>{hostel.name}</h2>
 
                <div>
                    <h3>Contact Details</h3>
                    <p>Phone Number: {hostel.phone}</p>
                    <p>Email: {hostel.email}</p>
                    <p>Address: {hostel.address}, {hostel.postcode}</p>
                </div>

                <div>
                    <h3>Hostel Description</h3>
                    <p>{hostel.description}</p>
                </div>
            </div>
            
                <div>
                    <div>
                     <Reviews hostelIn={hostel} /> 
                    </div>  
                </div> 
        </div>
    )
}