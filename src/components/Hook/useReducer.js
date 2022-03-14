import { useReducer } from 'react'
import './style.css'

const reducer=(state, action)=>{
    if(action.type==='INCR'){
        state= state+1;
    }

    if(state>0 && action.type==='DECR'){
        if(state>0){
            state=state-1;
            
        }

    }
    return state;
};

const UseReducer=()=>{
 //   const [myNum,setMyNum]=useState(0)
    const initialData=10;
    const [state, dispatch]=useReducer(reducer, initialData);

    const IncrNum=(event)=>{
      event.preventDefault();
      dispatch({type:"INCR"});
    }

    const DecrNum=(event)=>{
        event.preventDefault();
        dispatch({type:"DECR"})
        
    }

    

    return(
        <>
        <div className="center_div">
            <p>{state}</p>
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

export default UseReducer;