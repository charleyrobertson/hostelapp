import React from 'react';

export default function ItinerariesList(itineraries) {
    
    
    return (
    <div>
    <h2>Itineraries</h2>
         
    {itineraries.itineraries.map((i) => (
         <p>{i.user}</p>               
    ))}
    </div>
    )
}

