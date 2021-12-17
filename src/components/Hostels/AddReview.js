import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useParams,  useNavigate } from 'react-router-dom';

export default function AddReview() {
    let params = useParams();
    let id = parseInt(params.id, 10);
    let navigate = useNavigate();
   
    console.log(params);

    const [reviewerIn, setReviewer] = useState("");
    const [reviewIn, setReview] = useState("");
    const baseURL = "http://localhost:3000/hostels/review/" + id;
    const rHeaders = {
        "Content-Type":"application/json",
        'Accept':'application/json',
    };
    
    const addReview = async () => {
        const rev = {
            reviewer: reviewerIn,
            review: reviewIn
        }
    
        //Ensure the fields have been filled with information before submit
        if(rev.review.length <= 0 || rev.reviewer.length <= 0) {
            alert("Please fill out both fields before submission.")
        } else {
            await fetch(baseURL, {
                method: "POST",
                headers: rHeaders,
                body: JSON.stringify(rev),
                });
                navigate("/hostels/" + params.id);
            };
        }

        
    
        const handleReviewer =  (e) => {
            setReviewer(e.currentTarget.value);
        }
    
        const handleReview =  (e) => {
            setReview(e.currentTarget.value);
        }


        return (
            <div className='text-center'>
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
                <Button 
                variant='secondary' 
                onClick={() => {addReview()}}>
                Post Review
                </Button>
                </form>
            </div>
    
        )
    
}



