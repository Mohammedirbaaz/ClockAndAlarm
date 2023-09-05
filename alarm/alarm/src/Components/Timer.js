import React,{useState,useEffect} from 'react';
import Nav from './nav';
import Footer from './footer';
import './style/timer.css'

function Timer(){
    const [Hour,setHour]=useState();
    const [Minute, setMinute] = useState();
    var [Second, setSecond] = useState();
    const [isclicked, setIsclicked] = useState(false);
    const [isfinish, setIsfinish] = useState(false);
    let interval;
    
    useEffect(()=>{
        if(isclicked===true && (Hour==0 || Hour==undefined) && (Minute==0 || Minute==undefined) && (Second==0 || Second==undefined)) 
        {
            // clearInterval(interval);
            console.log("yeeeeesssss");
            alert("done!");
            setIsfinish(true);  
        }
         
        console.log(Hour+","+Minute+","+Second+","+isclicked+","+isfinish);
        if(Second===0)
        {
            if(Minute>=1)
            {
                setMinute(min=>min-1);
                setSecond(59);
            }else
            {
                if(Hour==0)
                {
                    alert("Inside Done!");
                }else if(Hour>=1)
                {
                    setHour(hr=>hr-1);
                    setMinute(59);
                    setSecond(59);
                }
            }
        }
    },[{Second,isclicked,isfinish}]);

    

    function go()
    {
        setIsclicked(true);
        interval=setInterval(()=>{
            setSecond(Second=>Second-1);
            console.log(isclicked+"...lol..."+isfinish)
            if(isclicked==true && isfinish==true) {
                clearInterval(interval);
                alert("doubledone!");
            } 
        },1000);
        
    }

    function pause()
    {

    }

    function restart()
    {

    }

    return(
        <div>
            <Nav/>
            <div className='timer-inputcontainer'>
                <input type='number' className='child-input'  placeholder='Hours' onChange={(e)=>{setHour(e.target.value)}} defaultValue={Hour}/>
                <input type='number' className='child-input' placeholder='Minutes' onChange={(e)=>{setMinute(e.target.value)}} defaultValue={Minute}/>
                <input type='number' className='child-input' placeholder='Seconds' onChange={(e)=>{setSecond(e.target.value)}} defaultValue={Second}/>
            </div>

            <div className='timer-menu'>
                <img width="48" height="48" src="https://img.icons8.com/color/48/go--v1.png" alt="go--v1" onClick={()=>go()}/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/sleep-mode--v1.png" alt="sleep-mode--v1" onClick={()=>pause()}/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/restart--v1.png" alt="restart--v1" onClick={()=>restart()}/>
            </div>

            <div className='timer-main'>
                <div className='timer-time'>{(Hour==null)? '00' : Hour}</div>
                <div className='timer-time'>{(Minute==null)? '00' : Minute}</div>
                <div className='timer-time'>{(Second==null)? '00' : Second}</div>
            </div>
            <Footer/>
        </div>
    );
}
export default Timer;