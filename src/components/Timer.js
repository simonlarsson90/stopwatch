import React, { useState, useEffect } from 'react';
import '../App.css';


function Timer() {
  const [status, setStatus] = useState(false)
  const [timer, setTimer] = useState(0)

  // För att kunna använda clearinterval på setinterval definerar vi variabeln utanför för att kunna referera inne i useEffect
  

  // Varje gång status ändras körs den här useEffect
  useEffect(() => {
    if (status === true) {
      // från useRef använder vi .current
      const intervalId = setInterval(() => {

        // Lägger på 10 till förra värdet (körs varje millesekund)
        setTimer(prev => prev + 10)
      }, 10)

      // Avslutar intervalen
    return () => clearInterval(intervalId)
    }
  }, [status])



  let centiseconds = ("0" + (Math.floor(timer / 10) % 100)).slice(-2);
  let seconds = ("0" + (Math.floor(timer / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timer / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timer / 3600000)).slice(-2);



  return (
    <div className="App">
      <div className="Timer">{hours} : {minutes} : {seconds}</div>
      <div className="Btn">
      <button onClick={() => { setStatus(true) }}>start</button>
      <button onClick={() => { setStatus(false) }}>stop</button>
      <button onClick={() => { setTimer(0) }}>reset</button>
      </div>
    </div>
  );
}

export default Timer
