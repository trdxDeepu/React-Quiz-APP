/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react"


const Timer = ({dispatch,secondsRemaning}) => {

    useEffect(()=>{
        setInterval(()=>{
          dispatch({type:'tick'})
        },1000)
    },[dispatch])

  return (
    <div className="timer">{secondsRemaning}</div>
  )
}

export default Timer