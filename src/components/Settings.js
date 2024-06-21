import React, { useState, useEffect } from 'react';
import "../styles/Settings.css";
import "../styles/MediaQueries.css";
import "../styles/MediaQueries.css";
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const [minutes, setMinutes] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [alertSound, setAlertSound] = useState('');
    const [alertPlaying, setAlertPlaying] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('timerSettings'));
        if (savedSettings) {
            setMinutes(savedSettings.minutes);
            setBreakTime(savedSettings.breakTime);
            setAlertSound(savedSettings.alertSound);
        }
    }, []);

    const validateInput = (value) => {
        let intValue = parseInt(value, 10);
        if (isNaN(intValue) || intValue < 5) {
          return 5;
        } else if (intValue > 60) {
          return 60;
        } else {
          return Math.round(intValue / 5) * 5;
        }
    };  

    const handleMinutesChange = (e) => {
        setMinutes(validateInput(e.target.value));
    };

    const handleBreakChange = (e) => {
        setBreakTime(validateInput(e.target.value));
    }

    // const handleAlertSoundChange = (e) => {
    //     setAlertSound(e.target.value);
    //     const audio = new Audio(`./public/sounds/${e.target.value}.mp3`);
    //     audio.play();
    // } //this code doesn't work unfortunately

    const handleAlertSoundChange = (e) => {
        const selectedSound = e.target.value;
        setAlertSound(selectedSound);
    
        const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/${selectedSound}.mp3`);
        // documentation for using "process.env.PUBLIC_URL": https://create-react-app.dev/docs/using-the-public-folder/ and https://create-react-app.dev/docs/adding-custom-environment-variables/
        audio.play().catch(error => {
          console.error("Failed to play audio:", error);
          alert("Failed to load sound. Please check the audio file path and format.");
        });
    };

    const handleReset = () => {
        setMinutes(25);
        setBreakTime(5);
        setAlertSound('');  
    }

    const handleSave = () => {
        const settings = {
            minutes,
            breakTime,
            alertSound
        };
        localStorage.setItem("timerSettings", JSON.stringify(settings));
        alert("Settings saved!");
        navigate("/");
        
    }

    return (
      <div>
        <main>
            <h1>Settings</h1>
            <form className="timersettings-form">

                <div className="timer-settings">
                    <p className="settings-title">Timer Settings</p>
                    <label className="pomodoro-title" htmlFor="minutes">Pomodoro:</label>
                    <input className="minutes-settings" type="number" name="minutes" id="minutes" placeholder="25 minutes" value={minutes} onChange={handleMinutesChange} min="5" max="60" step="5" /> 
                    <label className="break-title" htmlFor="break">Break:</label>
                    <input className="minutes-settings" type="number" name="break" id="break" placeholder="5 minutes" value={breakTime} onChange={handleBreakChange} min="5" max="60" step="5" />
                </div>

                <div className="alertsound-settings">
                    <p className="settings-title">Alert Sounds</p>
                    <label htmlFor="alert-sound">Select Alert Sound:</label>
                    <select name="alert-sound" id="alert-sound" value={alertSound} onChange={handleAlertSoundChange}>
                        <option value="" disabled selected>Select</option>
                        <option value="twinkle">Twinkle</option>
                        <option value="bells">Bells</option>
                        <option value="soft-alarm">Soft Alarm</option>
                    </select>
                </div>
                
            </form>
            <div className="save-reset-settings">
                <button className="resetsettings-button" onClick={handleReset}>Reset</button>
                <button className="savesettings-button" onClick={handleSave}>Save</button>
            </div>
        </main>
      </div>
    )
  }
  
  export default Settings;