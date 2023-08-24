import React, { useState, useEffect } from "react";
import "./DateDisplay.css";
function DateDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[dateTime.getDay()];
  const month = months[dateTime.getMonth()];

  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = dateTime.getDate();

  return (
    <div className="dateTimeContainer">
      <p className="time">{formattedTime}</p>
      <p>{dayOfWeek}</p>
      <p>{formattedDate}</p>
      <p>{month}</p>
    </div>
  );
}

export default DateDisplay;
