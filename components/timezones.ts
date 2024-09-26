import moment from "moment-timezone";

// Get all available timezones from moment-timezone
export const timezones = moment.tz.names();


export const cityTimezoneMap = [
    { label: "New York, USA", value: "America/New_York" },
    { label: "London, UK", value: "Europe/London" },
    { label: "Tokyo, Japan", value: "Asia/Tokyo" },
    { label: "Sydney, Australia", value: "Australia/Sydney" },
    { label: "Los Angeles, USA", value: "America/Los_Angeles" },
    { label: "Paris, France", value: "Europe/Paris" },
    { label: "Moscow, Russia", value: "Europe/Moscow" },
    { label: "UTC", value: "UTC" },
    // Add more cities and corresponding timezones here
  ];
  
