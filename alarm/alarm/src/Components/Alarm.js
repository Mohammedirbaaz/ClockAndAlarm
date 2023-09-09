import React,{useState,useEffect,useRef} from 'react';
import Nav from './nav';
import Footer from './footer';
import './style/Alarm.css'


function Alarm(){
    const adddiv=useRef();
    const maindivs=useRef();
    const [Hour, setHour] = useState(0);
    const [Minute, setMinute] = useState(0);
    const [Name, setName] = useState('Alarm');
    const [Days, setDays] = useState(['','','','','','','']);
    const [meridian, setmeridian] = useState('AM');
    const [obj,setObj]=useState([{}]);
    const toggles =useRef();
    const [time,SetTime]=useState('');
    let tim=setInterval(()=>{
        let date=new Date();
        for(var i=0;i<obj.length;i++)
        {
            if(obj[i].Mer=="AM")
            {
                if(date.getHours()==obj[i].Hr && date.getMinutes()==obj[i].Min && obj[i].Set==true && obj[i].Days[date.getDay()]!='')
                {
                    alert(obj[i].Name +","+obj[i].Hr+":"+obj[i].Min);
                    ontogglehandler(i);    

                }
            }else{
                if((date.getHours()-12)==obj[i].Hr && date.getMinutes()==obj[i].Min && obj[i].Set==true && obj[i].Days[date.getDay()]!='')
                {
                    alert(obj[i].Name +","+obj[i].Hr+":"+obj[i].Min);
                    ontogglehandler(i); 
                }
            }
        }
    },1000);

    function Handlersetdays(ind,e,da)
    {
        let newDays=[...Days];
        if(e.target.checked==true) newDays[ind]=da;
        else  newDays[ind]='';
        setDays(newDays);
    }
    

    function addhandler()
    {
        adddiv.current.style.display="block";
    }
    function onsubmit()
    {
        maindivs.current.style.display="flex";

        // console.log(Hour+","+Minute+","+Name+","+Days+","+meridian);

        let objs={
            Hr:Hour,
            Min:Minute,
            Mer:meridian,
            Name:Name,
            Days:Days,
            Id:obj.length,
            Set:true
        };
        let obj1=[...obj];
        obj1[obj1.length]=objs;
        setObj(obj1);
        // console.log('objs '+objs.Id);
        adddiv.current.style.display="none";
    }

    function ontogglehandler(id)
    {
        if(document.getElementById(id).style.justifyContent=="flex-start")
        {
            document.getElementById(id).style.backgroundColor="greenyellow"
            document.getElementById(id).style.justifyContent="flex-end";
            obj[id].Set=true;
        }else{
            document.getElementById(id).style.backgroundColor="rgb(57, 54, 54)"
            document.getElementById(id).style.justifyContent="flex-start";
            obj[id].Set=false;

        }
        // console.log(obj[id]);

    }

    return(
        <div>
            <Nav/>
            <div className='add-cont' onClick={()=>addhandler()}>
                <span className='add-symbol'>+</span>
            </div>

            <div className='maindiv' ref={maindivs}>
                {(obj.length!=1)?obj.map(list=>{
                    return(
                        <div className='alarmdiv'  key={list.Id}>
                            <div className='setdiv'>
                                <p>{list.Hr}:{list.Min} {list.Mer}</p>
                                <div className='toggleparent' ref={toggles} id={list.Id} onClick={()=>ontogglehandler(list.Id)}>
                                    <div className='togglechild'></div>
                                </div>
                            </div>
                            <p>{list.Name} - {list.Days}</p>
                        </div>
                    )
                }): <>No Alarm</>}    
            </div>

            <div className='alarmcreate-cont' ref={adddiv}>
                <div className='alarm-time'>
                    <input type='number' className='inputs' placeholder='Hour' onChange={(e)=>setHour(e.target.value)} defaultValue={Hour}/>
                    <input type='number' className='inputs' placeholder='Minute' onChange={(e)=>setMinute(e.target.value)} defaultValue={Minute}/>
                    <select className='inputs' onChange={(e)=>{setmeridian(e.target.value);}} defaultValue={meridian}>
                        <option value={"AM"}>AM</option>
                        <option value={"PM"}>PM</option>
                    </select>
                </div>

                <div className='alarm-time'>
                    <p className='alarm-time-child'>Alarm Name</p>
                    <input type='text' className='inputs alarm-time-child' onChange={(e)=>{setName(e.target.value)}} defaultValue={Name}/> 
                </div>

                <div className='alarm-time'>
                    <p className='alarm-time-child'>Day</p>
                    <div className='alarm-dayset alarm-time-child'> 
                        
                        <div className='alarm-daysetchild'>
                            <input type='checkbox' className='inputs' value="Monday" onChange={(e)=>{Handlersetdays(1,e,'Mon')}}/>
                            <label>Monday</label> 
                        </div>
                        <div className='alarm-daysetchild'>
                            <input type='checkbox' className='inputs' value="Tuesday" onChange={(e)=>{Handlersetdays(2,e,'Tue')}} />
                            <label>Tuesday</label> 
                        </div>
                        <div className='alarm-daysetchild'>
                            <input type='checkbox' className='inputs' value="Wednesday" onChange={(e)=>{Handlersetdays(3,e,'Wed')}} />
                            <label>Wednesday</label> 
                        </div>
                        <div className='alarm-daysetchild'>
                            <input type='checkbox' className='inputs' value="Thursday" onChange={(e)=>{Handlersetdays(4,e,'Thur')}} />
                            <label>Thursday</label> 
                        </div>
                        <div className='alarm-daysetchild'>
                            <input type='checkbox' className='inputs' value="Friday" onChange={(e)=>{Handlersetdays(5,e,'Fri')}} />
                            <label>Friday</label> 
                        </div>
                        <div className='alarm-daysetchild'>
                            <input type='checkbox' className='inputs' value="Saturday" onChange={(e)=>{Handlersetdays(6,e,'Sat')}} />
                            <label>Saturday</label> 
                        </div>
                        <div className='alarm-daysetchild'>
                            <input type='checkbox' className='inputs' value="Sunday" onChange={(e)=>{Handlersetdays(0,e,'Sun')}} />
                            <label>Sunday</label> 
                        </div>
                    </div>
                </div>

                <div className='alarm-time'>
                    <input type='submit' className='inputs inputssubmit' onClick={()=>onsubmit()}/> 
                </div>


            </div>
            

            <Footer/>
        </div>
    );
}
export default Alarm;