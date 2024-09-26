"use client"
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Select, { MultiValue } from "react-select";
import {cityTimezoneMap} from "./timezones";
import './TimezoneConverter.css';

interface TimeState {
  [timezone: string]: number;
}

interface TimezoneOption {
  label: string;
  value: string;
}

function TimezoneConverter() {
  const [currentTime, setCurrentTime] = useState<TimeState>({});
  const [selectedTimezones, setSelectedTimezones] = useState<MultiValue<TimezoneOption>>([]);
  const [militaryTime, setMilitaryTime] = useState<boolean>(false);
  const [showMinutes, setShowMinutes] = useState<boolean>(false);

  useEffect(() => {
    const updateHours = () => {
      const newTimeState: TimeState = {};
      selectedTimezones.forEach(({ value }) => {
        newTimeState[value] = moment.tz(value).hour();
      });
      setCurrentTime(newTimeState);
    };

    updateHours();
    const interval = setInterval(updateHours, 60 * 1000);

    return () => clearInterval(interval);
  }, [selectedTimezones]);

  const handleTimezoneChange = (newValue: MultiValue<TimezoneOption>) => {
    setSelectedTimezones(newValue);
  };

  const handleToggleMilitaryTime = () => {
    setMilitaryTime(!militaryTime);
  };

  const handleToggleShowMinutes = () => {
    setShowMinutes(!showMinutes);
  };

  const formatTime = (hour: number) => {
    if (militaryTime) {
      return showMinutes ? moment().hour(hour).format("HH:mm") : moment().hour(hour).format("HH:00");
    } else {
      return showMinutes ? moment().hour(hour).format("h:mm A") : moment().hour(hour).format("h A");
    }
  };

  const ribbonSections = (currentHour: number) => {
    return Array.from({ length: 24 }).map((_, i) => {
      const hour = (currentHour + i + 12) % 24; // Center the current hour
      return (
        <div
          key={hour}
          className={`ribbon-section ${hour === currentHour ? 'current-hour' : ''}`}
        >
          {formatTime(hour)}
        </div>
      );
    });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Timezone Converter</h1>
      <div>
        <label>
          Select Timezones:
          <Select
            isMulti
            options={cityTimezoneMap}
            value={selectedTimezones}
            onChange={handleTimezoneChange}
            placeholder="Type a city..."
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleToggleMilitaryTime}>
          Toggle Military Time
        </button>
        <button onClick={handleToggleShowMinutes} style={{ marginLeft: "10px" }}>
          Toggle Minutes Display
        </button>
      </div>

      <div className="ribbon-container">
        {selectedTimezones.map(({ value, label }) => (
          <div key={value}>
            <h3>{label}</h3>
            <div className="timezone-ribbon">
              {ribbonSections(currentTime[value])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimezoneConverter;
