import React,{useState,useEffect} from 'react';
import Nav from './nav';
import Footer from './footer';
import './style/timezone.css'
import axios from 'axios';

function TimeZone(){

    const [timezone, setTimezone]= useState([{}]);
    const [arr,setArr]=useState([{countrycode:'1',country:'india'},{countrycode:'2',country:'india1'}]);


    useEffect(()=>{
        axios.get('http://localhost:5000/').then(res=>{
            setTimezone(res.data.zones);
            console.log(res.data.zones);
        }).catch(er=>{
            console.log(er);
        });
    },[]);

    return(
        <div>
            <Nav/>
            <div className='mytimediv'>
                <p className='time-mytime'>Your Time</p>
                <div className='time-container'>
                    <img className='time-gif' width="60" height="60" src="https://img.icons8.com/color/60/present.png" alt="present"/>
                    <div className='time-details'>
                        <p className='time-realtime'>{new Date().toLocaleTimeString()}</p>
                        <p className='time-zone'>Asia/India/Kolkata</p>
                    </div>
                </div>
            </div>

            <hr width="90%"/>
            <div className='othertimediv'>
            {
                    timezone.map((list,id)=>{
                        let date=new Date(list.timestamp*1000);
                        var timelagging = 2.2;
                        var cdt = new Date(date-((5 * 30 * 60 * 1000) * timelagging));
                        var time=cdt.toLocaleTimeString();
                        return(
                            <div className='time-container' key={id}>
                                <img className='time-gif' width="60" height="60" src="https://img.icons8.com/color/60/present.png" alt="present"/>
                                <div className='time-details'>
                                    <p className='time-realtime' >{time}</p>
                                    <p className='time-realtime' >{list.countryName}</p>
                                    <p className='time-realtime timezone' >{list.zoneName}</p>
                                </div>
                            </div>);
                    })
                } 
            </div>

            <Footer/>
        </div>
    );
}
export default TimeZone;