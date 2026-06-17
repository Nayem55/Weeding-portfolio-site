import { useEffect, useRef, useState } from 'react';

export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);

    const current = ref.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}
