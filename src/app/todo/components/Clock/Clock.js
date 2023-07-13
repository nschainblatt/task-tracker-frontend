import { useState, useEffect } from "react";

export const Clock = () => {
    const [time, setTime] = useState('');
    const determineHour = (hour) => {
        let meridiem;
        if (hour > 12) {
            hour -= 12;
            meridiem = "pm";
        } else {
            meridiem = "am";
        } 
        if (hour < 10) {
            hour = '0' + hour;
        }
        return [hour, meridiem];
    }

    const determineLengthTime = (time) => {
        if (time < 10) {
            time = '0' + time;
        }
        return time;
    }

    const updateClock = () => {
        const date = new Date();
        const hour = determineHour(date.getHours());
        const minute = determineLengthTime(String(date.getMinutes()));
        const seconds = determineLengthTime(String(date.getSeconds()));
        setTime(hour[0] + ":" + minute);
    }

    useEffect(() => {
        window.setInterval(updateClock);
    }, []);

    return (
        <div className="time">
            <h1>{time}</h1>
        </div>
    );
}