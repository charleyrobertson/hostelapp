import React, { useState, useEffect, useCallback } from 'react';
import Reviews from './Reviews';
import { useNavigate, useParams } from "react-router-dom";
import Rating from 'react-rating';
import Ratings from './Ratings';

export default function HostelDisplay()
{
    let params = useParams();
    let id = parseInt(params.id, 10);
    let fetchURL = "http://localhost:3000/hostels/" + id;
    
    const [hostel, setHostel] = useState({
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
    });

    const fetchData = useCallback(() => {
      fetch(fetchURL)
        .then((res) => res.json())
        .then((data) => {
          const hosteldata = data[0];
          setHostel(hosteldata);
        });
    }, [fetchURL]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
      

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

                <div>
                  <h3>Average Rating</h3>
                   <Ratings ratings={hostel.ratings} />  
                </div>
                    

                <div>
                  <h3>Reviews</h3>
                   <Reviews reviews={hostel.reviews}/> 
                </div>
        </div>
    
                    
        </div>
    )
}