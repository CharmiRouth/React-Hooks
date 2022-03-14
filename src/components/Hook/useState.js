import './style.css';
import { useState } from 'react';

const UseState=(props)=>{

    const [myNum,setMyNum]=useState(0)
    const IncrNum=(event)=>{
        event.preventDefault();
        setMyNum(myNum+1);
    }

    const DecrNum=(event)=>{
        event.preventDefault();
        if(myNum>0 ? setMyNum(myNum-1) : setMyNum(0));
        
    }

    

    return(
        <>
        <div className="center_div">
            <p>{myNum}</p>
            <div class="button2" onClick={IncrNum}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div class="button2" onClick={DecrNum}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
        </div>
        </>
    )
}

export default UseState;

