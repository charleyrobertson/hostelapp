import React, {useState, useEffect, useCallback} from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';

export default function Ratings(ratings) {
    console.log(ratings);
    ratings = ratings.ratings;
    let average = 0;

     for(let i=0; i<ratings.length; i++) {
        average = average + ratings[i];
        console.log(average + "during loop");
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

    return (
        <div>
            <Rating initialRating={average} readonly/> 
            <p>{average} stars calculated from {ratings.length} ratings.</p>
        </div>
        
    )
}