import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from "react-router-dom";
import Hostels from "../Hostels/Hostels"
import Home from '../Home/Home'
import HostelDisplay from "../Hostels/HostelInfoDisplay";
import HostelsList from "../Hostels/HostelsList";
import AddReview from "../Hostels/AddReview"
import Itineraries from "../Itineraries/Itineraries";
import ItinerariesList from "../Itineraries/ItinerariesList";
import AddItinerary from "../Itineraries/AddItinerary";
import AddStage from "../Itineraries/AddStage";

function App() {
    //Get all hostels
     //--- Getting Hostels from API ---
     const [hostelsList, setHostelsList] = useState([
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
      async function getHostelsList() {
        const res = await fetch('http://localhost:3000/hostels');
        const data = await res.json();
        setHostelsList(data);
        console.log(data);
      }
      getHostelsList();
    }, []);  
  //--- END - Getting Hostels from API - END ---
  
  // GET -- All itineraries
  const [itinerariesList, setItinerariesList] = useState([
    {
      user: "User",
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

  
  return(
    <div>
      <div>
        <nav 
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          textAlign: "center"
        }}>
          <Link to="/">Hostel Finder: North Cost 500</Link> | {" "}
          <Link to="/hostels">Hostels</Link> | {" "}
          <Link to="/itineraries">Itineraries</Link>
        </nav>
      </div>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="hostels" element={<Hostels />}>
        <Route index element={<HostelsList hostels={hostelsList} />}></Route>
        <Route path=":id" element={<HostelDisplay />}/>
        <Route path=":id/reviews" element={<AddReview />}/>
      </Route>
      <Route path="itineraries" element={<Itineraries />}>
        <Route index element={<ItinerariesList itineraries={itinerariesList}/>}/>
        <Route path="add" element={<AddItinerary />}/>
        <Route path="new" element={<AddStage />}/>
      </Route>
      <Route path="*" element={
      <main style={{ padding: "1rem" }}>
        <p> Please Click on a link in the nav!</p>
      </main>
      }/>

    </Routes>
  </div>

  )
}

export default App;