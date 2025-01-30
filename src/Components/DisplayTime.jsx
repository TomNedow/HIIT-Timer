import '/src/App.css'
import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


function DisplayTime() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null); 

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {secondsPassed.toFixed(3)} seconds</h1>

            <div className='btn-container'>
                <button className="display-time-start-btn" onClick={handleStart}><FontAwesomeIcon icon={faCirclePlay} /></button>
                <button className="display-time-stop-btn" onClick={handleStop}>Stop</button>
            </div>
        </>
    );
}

export default DisplayTime;
