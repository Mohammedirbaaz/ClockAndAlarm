import React from 'react';
import './style/nav.css';
import { useNavigate } from "react-router-dom";
import imgs from '../img/alarm_small.png';

function Nav(){
    const navigate = useNavigate();
    return(
        <nav className='title'>
            <img src={imgs} onClick={()=>{navigate('/')}}/>
        </nav>
    );
}
export default Nav;