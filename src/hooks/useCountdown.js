import { useEffect, useState } from 'react';

function getRemaining(targetDate) {
  const diff = targetDate - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimeLeft(getRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [targetDate]);

  return timeLeft;
}
