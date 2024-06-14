// this code contains the timerLogic functionality. i put it into a separate file bc the code is too long
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Timer = () => {
    const initialSettings = JSON.parse(localStorage.getItem('timerSettings')) || {
      minutes: 25,
      breakTime: 5,
      alertSound: 'soft-alarm',
    };
  
    const defaultState = {
      currentTime: initialSettings.minutes * 60,
      isRunning: false,
      isWorkSession: true,
    };
  
    const [state, setState] = useState(JSON.parse(localStorage.getItem('timerState')) || defaultState);
    const [intervalId, setIntervalId] = useState(null);
  
    const workTime = initialSettings.minutes * 60;
    const breakTime = initialSettings.breakTime * 60;
  
    useEffect(() => {
      const saveState = () => {
        localStorage.setItem('timerState', JSON.stringify(state));
      };
  
      saveState();
    }, [state]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };
  
    const tick = () => {
      setState((prevState) => {
        const newState = { ...prevState, currentTime: prevState.currentTime - 1 };
  
        if (newState.currentTime <= 0) {
          clearInterval(intervalId);
          new Audio(`./public/sounds/${initialSettings.alertSound}.mp3`).play();
          newState.isRunning = false;
          newState.isWorkSession = !newState.isWorkSession;
          newState.currentTime = newState.isWorkSession ? workTime : breakTime;
        }
  
        return newState;
      });
    };
  
    const startTimer = () => {
      const id = setInterval(tick, 1000);
      setIntervalId(id);
    };
  
    const handleStartPause = () => {
      if (state.isRunning) {
        clearInterval(intervalId);
      } else {
        startTimer();
      }
  
      setState((prevState) => ({
        ...prevState,
        isRunning: !prevState.isRunning,
      }));
    };
  
    const handleReset = () => {
      clearInterval(intervalId);
      setState({
        ...defaultState,
        currentTime: workTime,
      });
    };
  
    useEffect(() => {
      return () => clearInterval(intervalId);
    }, [intervalId]);
  
    useEffect(() => {
      if (state.isRunning) {
        startTimer();
      }
    }, []);

    return (
      <div className="pomodoro-container">
        <div className="timer-container">
          <h1 className="timer">{formatTime(state.currentTime)}</h1>
        </div>
        <div className="controls">
          <button onClick={handleStartPause}>
            <i className={`fa-solid fa-${state.isRunning ? 'pause' : 'play'}`}></i> {state.isRunning ? 'pause' : 'start'}
          </button>
          <button onClick={handleReset}>
            <i className="fa-solid fa-rotate-left"></i> reset
          </button>
         <Link to={"/settings"}>
            <i className="fa-solid fa-gear"></i>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Timer;