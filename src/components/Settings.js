import React from 'react';

const Settings = () => {
    return (
      <div>
        <main>
            <h1>Settings</h1>
            <form className="timersettings-form">

                <div className="timer-settings">
                    <p className="settings-title">Timer Settings</p>
                    <label className="pomodoro-title" htmlFor="minutes">Pomodoro:</label>
                    <input className="minutes-settings" type="number" name="minutes" id="minutes" placeholder="25 minutes" min="5" max="60" step="5" /> 
                    <label className="break-title" htmlFor="break">Break:</label>
                    <input className="minutes-settings" type="number" name="break" id="break" placeholder="5 minutes" min="5" max="60" step="5" />
                </div>

                <div className="alertsound-settings">
                    <p className="settings-title">Alert Sounds</p>
                    <label htmlFor="alert-sound">Select Alert Sound:</label>
                    <select name="alert-sound" id="alert-sound">
                        <option value="" disabled selected>Select</option>
                        <option value="twinkle">Twinkle</option>
                        <option value="bells">Bells</option>
                        <option value="soft-alarm">Soft Alarm</option>
                    </select>
                </div>
                
            </form>
            <div className="save-reset-settings">
                <button className="resetsettings-button">Reset</button>
                <button className="savesettings-button">Save</button>
            </div>
        </main>
      </div>
    )
  }
  
  export default Settings;