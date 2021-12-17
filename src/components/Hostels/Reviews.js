import React, {useState, useEffect} from 'react';
import Rating from 'react-rating';


export default function Reviews({hostelIn})
{
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
        setHostel(hostelIn);
            console.log(hostel);
      }, []);
  
    
      

    //Ratings Calculations

    const ratings = hostel.ratings;
    console.log(ratings);
    let average = 0;

     for(let i=0; i<ratings.length; i++) {
        average = average + ratings[i];
    }
    if(average === 0) {
        average = 0;
    } else {
        average = parseFloat(average / ratings.length).toFixed(2);
    }
    console.log(average);

    let oneStar = 0;
    let twoStar = 0;
    let threeStar = 0;
    let fourStar = 0;
    let fiveStar = 0;
   
    for(let i=0; i<ratings.length; i++) { 
        if(ratings[i] === 1) {
             oneStar = oneStar + 1;
         }
         else if(ratings[i] === 2) {
            twoStar = twoStar + 1;
         }
        else if(ratings[i] === 3) {
             threeStar = threeStar + 1;
         }
         else if(ratings[i] === 4) {
             fourStar = fourStar + 1;
         }
         else if(ratings[i] === 5) {
             fiveStar = fiveStar + 1;
         }
    }
    //End of Ratings Calculations


    
    
    return(

        <div>
            <div>
                <h3>Average Rating</h3>
                <Rating initialRating={average} readonly/> 
                <p>{average} stars calculated from {ratings.length} ratings.</p>
            </div>

            <div>
                <div>
                    <h3>Reviews</h3>
                    {hostel.reviews.map((r) => (
                    <div key={r.review.slice(0, 2)}>  
                        <p>{r.review}</p> Reviewed by: <>{r.reviewer}</>
                </div>
                ))}
            </div>

            </div>
            </div>
            
       
    )
}