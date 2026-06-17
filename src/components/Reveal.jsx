import { useReveal } from '../hooks/useReveal';

export function Reveal({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
