// src/components/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    sound: true,
    timer: true,
    timerDuration: 10,
    numQuestions: 10,
  });

  const handleToggleSound = () => {
    updateSettings({ ...settings, sound: !settings.sound });
  };

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
  };

  const handleToggleTimer = () => {
    updateSettings({ ...settings, timer: !settings.timer });
  };

  const handleTimerChange = (event) => {
    updateSettings({
      ...settings,
      timerDuration: parseInt(event.target.value),
    });
  };

  const handleQuestionsChange = (event) => {
    updateSettings({ ...settings, numQuestions: parseInt(event.target.value) });
  };

  return (
    <div className="settings-container">
      <h2>Quiz Settings</h2>
      <div className="setting">
        <label>
          <input
            type="checkbox"
            checked={settings.sound}
            onChange={handleToggleSound}
          />
          Sound
        </label>
      </div>
      <div className="setting">
        <label>
          <input
            type="checkbox"
            checked={settings.timer}
            onChange={handleToggleTimer}
          />
          Timer
        </label>
      </div>
      {settings.timer && (
        <div className="setting">
          <label>Select Question Timer </label>
          <select
            value={settings.timerDuration}
            onChange={(event) => handleTimerChange(event)}
          >
            <option value={5}>5 seconds</option>
            <option value={10}>10 seconds</option>
            <option value={15}>15 seconds</option>
            <option value={30}>30 seconds</option>
            <option value={60}>60 seconds</option>
            <option value={90}>90 seconds</option>
            <option value={120}>120 seconds</option>
          </select>
        </div>
      )}

      <div className="setting">
        <label>Number of Questions per Round </label>
        <select
          value={settings.numQuestions}
          onChange={(event) => handleQuestionsChange(event)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
