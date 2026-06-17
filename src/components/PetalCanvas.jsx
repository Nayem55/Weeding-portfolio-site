import { useEffect, useRef } from 'react';
import { PALETTE } from '../constants/wedding';

function createPetal(width, height, initial = false) {
  return {
    x: Math.random() * width,
    y: initial ? Math.random() * height * -1 : -30,
    size: 6 + Math.random() * 14,
    speedY: 0.5 + Math.random() * 1.2,
    speedX: (Math.random() - 0.5) * 0.6,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.03,
    opacity: 0.25 + Math.random() * 0.55,
    color: Math.random() > 0.5 ? PALETTE.blush : PALETTE.goldLight,
  };
}

export function PetalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const drawPetal = (petal) => {
      context.save();
      context.translate(petal.x, petal.y);
      context.rotate(petal.angle);
      context.globalAlpha = petal.opacity;
      context.fillStyle = petal.color;
      context.beginPath();
      context.ellipse(0, 0, petal.size / 2, petal.size, 0, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const petals = Array.from({ length: 55 }, () => createPetal(width, height, true));

    const animate = () => {
      context.clearRect(0, 0, width, height);
      petals.forEach((petal) => {
        drawPetal(petal);
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.y / 60) * 0.3;
        petal.angle += petal.spin;
        if (petal.y > height + 40) Object.assign(petal, createPetal(width, height));
      });
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="petal-canvas" aria-hidden="true" />;
}
