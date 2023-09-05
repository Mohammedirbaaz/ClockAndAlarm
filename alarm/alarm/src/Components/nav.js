import React from 'react';
import './style/nav.css';

import imgs from '../img/alarm_small.png';

function Nav(){
    return(
        <nav className='title'>
            <img src={imgs}/>
        </nav>
    );
}
export default Nav;