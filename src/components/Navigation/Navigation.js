import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link, Route, Switch } from "react-router-dom";
import Hostels from '../Hostels/Hostels';
import Itineraries from '../Itineraries/Itineraries';
import Home from './Home';
import Button from "react-bootstrap/Button";


const styles = createUseStyles({
     wrapper: {
         outline: 'black solid 0.5px',
         padding: [15,15],
         textAlign: 'center'
     },
     list: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: 'grey',
     }
}); 

export default function Navigation() {
    const classes = styles();
    return(
        <div className={classes.wrapper}>
            <nav>
                <ul className={classes.list}>
                    <Link to="/">Hostel Finder: North Coast 500</Link>
                    <p>  </p>
                    <Button variant='secondary'><Link to="/hostels">Hostels</Link></Button>
                    <Button variant='secondary'><Link to="/itineraries">Itineraries</Link></Button>
                </ul>
            </nav>
   
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/hostels"><Hostels /></Route>
                <Route path="/itineraries"><Itineraries /></Route>
                <Route path="/*">
                    <p>This page doesnt exist! Click one of the links on the Navbar above.</p>
                </Route>
            </Switch>

        </div>


    )
}

