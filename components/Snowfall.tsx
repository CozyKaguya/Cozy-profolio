import React, { useEffect, useRef } from 'react';

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1,
          d: Math.random() * particleCount,
          s: Math.random() * 1 + 0.2
        });
      }
    };

    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      ctx.beginPath();
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      
      angle += 0.01;
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += (Math.cos(angle + p.d) + 1 + p.r / 2) * p.s;
        p.x += Math.sin(angle) * 1;

        if (p.x > canvas.width + 5 || p.x < -5 || p.y > canvas.height) {
          particles[i] = { x: Math.random() * canvas.width, y: -10, r: p.r, d: p.d, s: p.s };
        }
      }
      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" />;
};

export default Snowfall;