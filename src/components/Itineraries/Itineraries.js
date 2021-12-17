import React, { useState, useEffect } from 'react';


export default function Itineraries() {
    const [itinerariesList, setItinerariesList] = useState([
        {
          user: "",
          startdate: "",
          stages: [
            {
                stage: "",
                hostel: "",
                nights: ""
            }
          ],
        },
      ]);

      useEffect(() => {
        async function getItinerariesList() {
          const res = await fetch('http://localhost:3000/itineraries');
          const data = await res.json();
          setItinerariesList(data);
          console.log(data);
        }
        getItinerariesList();
      }, []);  
    
    return (
        <div>
            <h2>Itineraries</h2>
            {itinerariesList.map((itin) => ( 
                <p key={itin.user}>{itin.user}</p>
            ))}
        </div>
    );
}