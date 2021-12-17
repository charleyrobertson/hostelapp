import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function AddReview() {
    let params = useParams();
   
   
    console.log(params);

    const [reviewerIn, setReviewer] = useState("");
    const [reviewIn, setReview] = useState("");
    const baseURL = "http://localhost:3000/hostels/review/" + params.id;
    const rHeaders = {
        "Content-Type":"application/json",
        'Accept':'application/json',
    };
    
    const addReview = async () => {
        const query = {
            reviewer: reviewerIn,
            review: reviewIn
        }
    
        await fetch(baseURL, {
            method: "POST",
            headers: rHeaders,
            body: JSON.stringify(query),
            });
        };
    
        const handleReviewer =  (e) => {
            setReviewer(e.currentTarget.value);
        }
    
        const handleReview =  (e) => {
            setReview(e.currentTarget.value);
        }


        return (
            <div>
                <h3>Add a review</h3>
                <form>
                <label>
                    Name:
                    <input type="text" onChange={handleReviewer} value={reviewerIn} />
                </label>
                <br />
                <label>
                    Review:
                    <input type="text" onChange={handleReview} value={reviewIn}/>
                </label>
                <br/>
               <Button onClick={addReview}>
                   <Link to="/">Add Review</Link> 
                </Button>
                </form>
            </div>
    
        )
    
}



