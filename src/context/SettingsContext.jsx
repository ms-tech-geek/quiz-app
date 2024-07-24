// src/context/SettingsContext.js
import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    sound: true,
    timer: true,
    timerDuration: 10,
    numQuestions: 10,
  });

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
