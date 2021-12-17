import React, {useState, useEffect} from 'react';
import Rating from 'react-rating';

export default function Reviews({reviews})
{     
 console.log(reviews.reviews);
    return(

             <div>
                <div>
                     {reviews.map((r) => (
                     <div key={r.review.slice(0, 2)}>  
                         <p>{r.review}</p> Reviewed by: <>{r.reviewer}</>
                    </div>
                    ))}
                </div>

             </div>
            
       
    )
}