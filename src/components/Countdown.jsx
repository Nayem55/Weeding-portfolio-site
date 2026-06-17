import { WEDDING_DATE } from '../constants/wedding';
import { useCountdown } from '../hooks/useCountdown';

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);
  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <div className="countdown" aria-label="Wedding countdown">
      {units.map(({ value, label }) => (
        <div className="countdown__box" key={label}>
          <span className="countdown__number">{String(value).padStart(2, '0')}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
