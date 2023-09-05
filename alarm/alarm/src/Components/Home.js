import React from 'react';
import Nav from './nav'
import Footer from './footer';
import './style/home.css'
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <Nav/>
            <div className='h-container'>
                <div className='h-child' onClick={()=>{navigate('/alarm')}}>
                    <img width="64" height="64" src="https://img.icons8.com/plumpy/64/clock--v1.png" alt="clock--v1"/>
                    <p>Alarm</p>
                </div>
                <div className='h-child' onClick={()=>{navigate('/timezone')}}>
                    <img width="64" height="64" src="https://img.icons8.com/external-flat-lima-studio/64/external-timezone-calendar-flat-lima-studio.png" alt="external-timezone-calendar-flat-lima-studio"/>
                    <p>TimeZones</p>
                </div>
                <div className='h-child' onClick={()=>{navigate('/timer')}}>
                    <img width="64" height="64" src="https://img.icons8.com/plumpy/64/timer.png" alt="timer"/>
                    <p>Timer</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;