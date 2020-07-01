import React, { useState, useEffect } from 'react';
import '../App.css';

function Timer() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(0)
  const [status, setStatus] = useState(false)
  const [splits, setSplits] = useState([])

  

  const startTimer = () => {
    setTime(time)
    setStart(Date.now() - time)
    console.log(time)
    setStatus(true)
  }

  const stopTimer = () => {
    setStatus(false)
  }

  const resetInterval = () => {
    setTime(0)
    setSplits([])
  }

  const createLap = () => {
    setSplits([...splits, time])
  }




 
  useEffect(() => {
    if (status === true) {

      const intervalId = setInterval(() => setTime(Date.now() - start), 10)
      
      return () => clearInterval(intervalId)
    }
  })



  function formatTime(ms) {
    let min = Math.floor((ms / (1000 * 60)) % 60);
    let sec = ((ms % 60000) / 1000).toFixed(2);
    return `${min < 10 ? '0' + min : min}.${sec < 10 ? '0' + sec : sec}`;
  }

  return (
    <div className="App">
      <div className="Timer">{formatTime(time)}</div>
      <div className="Btn">

        <button onClick={() => { startTimer() }}>start</button>
        <button onClick={() => { stopTimer() }}>stop</button>
        <button onClick={() => { createLap() }}>laps</button>
        <button onClick={() => { resetInterval() }}>reset</button>
        <ul>
          {
            splits.map((l, id) => {
              console.log(id)
              return (
                <li key={id}>
                  <p>LAP {id + 1}</p> + {formatTime(l)}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Timer
