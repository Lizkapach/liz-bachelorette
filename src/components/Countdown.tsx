import { useState, useEffect } from 'react';
import { EVENT_DATE } from '../data';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units: Array<{ label: string; value: number }> = [
    { label: 'ימים', value: timeLeft.days },
    { label: 'שעות', value: timeLeft.hours },
    { label: 'דקות', value: timeLeft.minutes },
    { label: 'שניות', value: timeLeft.seconds },
  ];

  return (
    <div className="countdown">
      {units.map((u) => (
        <div key={u.label} className="countdown-unit">
          <span className="countdown-value">{String(u.value).padStart(2, '0')}</span>
          <span className="countdown-label">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
