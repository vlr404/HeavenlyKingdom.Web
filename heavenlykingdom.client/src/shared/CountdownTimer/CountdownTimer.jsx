// CountdownTimer.jsx
import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

export const CountdownTimer = ({ targetDate, title }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <div className="timer-section">
            <h2 className="timer-title">• UPCOMING: {title} •</h2>
            <div className="timer-container">
                {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                    <div className="timer-box" key={unit}>
                        <span className="timer-number">{formatNumber(timeLeft[unit])}</span>
                        <span className="timer-label">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};