import React from 'react';
import './style/footer.css';


function Footer(){
    return(
        <footer className='footer'>
            <p className='child'>Made with <img width="30" height="30" src="https://img.icons8.com/fluency/30/like.png" alt="like"/> by Irbaaz</p>
            <div className='child childl'>
                <a href='https://github.com/Mohammedirbaaz'><img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/github.png" alt="github"/></a>
                <a href='https://instagram.com/irbaaz_md'><img width="24" height="24" src="https://img.icons8.com/fluency/24/instagram-new.png" alt="instagram-new"/></a>
                <a href=''><img width="24" height="24" src="https://img.icons8.com/color/24/gmail-new.png" alt="gmail-new"/></a>
            </div>
        </footer>
    );
}
export default Footer;