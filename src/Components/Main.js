import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes,
    Link
} from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import Recurring from "../pages/Recurring";
import OneTime from "../pages/OneTime";
import Flexible from "../pages/Flexible";
import Getdata from "../pages/Getdata"
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container flex items-center justify-center">
                <div >
                    <Link to="/onetime">
                    <button className="button1">Back</button></Link>
                    <h3>Schedule Your HouseKeeping Services</h3>
                    <ProgressBar completed={10} customLabel=" "completedClassName="barCompleted"/>
    
                    <h5>Set Your Schedule</h5>
                    <ul className="header flex justify-around items-center">
                        <li><NavLink activeClassName="active" to="/">Recurring</NavLink></li>
                        <li><NavLink to="/onetime">One Time</NavLink></li>
                        <li><NavLink to="/flexible">Flexible</NavLink></li>
                        {/* <li><NavLink to='datalist'>Getdata</NavLink></li> */}
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Recurring/>} />
                            <Route path="/onetime" element={<OneTime/>} />
                            <Route path="/flexible" element={<Flexible/>} />
                            <Route path="/datalist" element={<Getdata/>}/>
                        </Routes>
                    </div>

                </div>
                </div>
                
            </HashRouter>
        );
    }
}

export default Main;