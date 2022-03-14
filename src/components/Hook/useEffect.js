//Same code implementation Using useEffect but 
//now icrement value will be shown on the title of the page
import { useState, useEffect } from 'react'
import './style.css'

const UseEffect=()=>{
    const [myNum,setMyNum]=useState(0)
    const IncrNum=(event)=>{
        event.preventDefault();
        setMyNum(myNum+1);
    }

    useEffect(()=>{
        document.title=`Chats(${myNum})`
    });

    // const DecrNum=(event)=>{
    //     event.preventDefault();
    //     if(myNum>0 ? setMyNum(myNum-1) : setMyNum(0));
        
    // }

    

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
            {/* <div class="button2" onClick={DecrNum}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div> */}
        </div>
        </>
    )

}

export default UseEffect;