import React from 'react';

const Home = () => {
    return (
      <div>
        <section>
        <div className="pomodoro-container">

            <div className="timer-container">
                <h1 className="timer">00:00</h1>
            </div>

            <div className="controls">
                <button id="start-pause-button">
                    <i className="fa-solid fa-play"></i> <i className="fa-solid fa-pause"></i> start/pause
                </button>
                <button id="reset-button">
                    <i className="fa-solid fa-rotate-left"></i> reset
                </button>
                <a href="#"><i className="fa-solid fa-gear"></i></a>
            </div>

        </div>
        </section>
      </div>
    )
  }
  
  export default Home;