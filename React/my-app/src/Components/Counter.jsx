import React, { useContext } from "react"
import { CounterContext } from "../Contexts/Count"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../reducers/counterSlice"
import { decrement } from "../reducers/counterSlice"

function Counter(){
   
    //const{increment}=useContext(CounterContext)

    // let count=0
    // function increment(){
    //     //console.log("incremented")
    //     setCount(count+1)
    //     // setCount((prev)=>prev+1)//for accessing previous value
    //     // count=count+1
    //     // console.log(count)
    // }
//     function decrement(){
// if(count<=0)
// console.log("cant be decremented")
// if(count>0)
//     console.log("decremented") 
//  return setCount(count-1)
       
//     }
    
    const count=useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const handleIncrement=()=>{
        dispatch(increment())
    }
    
    const handleDecrement=()=>{
        dispatch(decrement())
    }
    return(
        <>
        <div><h1>Counter component</h1></div>
        <p>Count : {count}</p>
        <button onClick={handleIncrement}>Increment</button>&nbsp;
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default Counter