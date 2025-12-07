import { useEffect, useRef } from 'react';

const StarfieldBackground = ({
  numStars = 200,
  numPlanets = 8,
  numShips = 10,
  numSatellites = 5, // New parameter for satellites
  numMoons = 5, // New parameter for moons
  speed = 0.8,
}) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const planetsRef = useRef([]);
  const shipsRef = useRef([]);
  const satellitesRef = useRef([]); // New ref for satellites
  const moonsRef = useRef([]); // New ref for moons
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const centerX = () => window.innerWidth / 2;
    const centerY = () => window.innerHeight / 2;

    // Initialize stars
    starsRef.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1500 + 500,
      baseZ: Math.random() * 1500 + 500,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      twinkle: Math.random(),
      canExplode: Math.random() < 0.03,
      explodeTimer: Math.random() * 6000 + 4000,
    }));

    // Initialize planets
    planetsRef.current = Array.from({ length: numPlanets }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 15 + 5,
      color: `hsl(${Math.random() * 360}, 60%, 50%)`,
      shape: Math.random() < 0.3 ? 'circle' : Math.random() < 0.6 ? 'ringed' : 'weird',
      z: Math.random() * 2000 + 1000,
      rotation: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    // Initialize spaceships
    shipsRef.current = Array.from({ length: numShips }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1500 + 500,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.4 + 0.2,
      type: Math.random() < 0.5 ? 'scout' : 'freighter',
      size: Math.random() * 8 + 4,
    }));

    // Initialize satellites (🛰️)
    satellitesRef.current = Array.from({ length: numSatellites }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1500 + 500,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.3 + 0.1,
      size: Math.random() * 6 + 3,
    }));

    // Initialize moons (🌑)
    moonsRef.current = Array.from({ length: numMoons }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 2000 + 1000,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      radius: Math.random() * 10 + 4,
      rotation: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', (e) => {
      mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    const animate = (time) => {
      // Background with milky way (🌌) aesthetic
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const gradient = ctx.createRadialGradient(
        centerX(), centerY(), 0,
        centerX(), centerY(), Math.max(window.innerWidth, window.innerHeight) * 0.5
      );
      gradient.addColorStop(0, 'rgba(20, 20, 60, 0.15)'); // Subtle blue for milky way
      gradient.addColorStop(0.5, 'rgba(50, 20, 80, 0.1)'); // Purple hue for galaxy
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const cx = centerX();
      const cy = centerY();

      // Update and draw stars
      starsRef.current.forEach((star) => {
        star.z -= speed;
        star.x += star.vx;
        star.y += star.vy;
        star.vx += (Math.random() - 0.5) * 0.05;
        star.vy += (Math.random() - 0.5) * 0.05;
        star.explodeTimer -= 16;

        const dx = mouseRef.current.x - star.x;
        const dy = mouseRef.current.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          star.vx += (dx / dist) * 0.3;
          star.vy += (dy / dist) * 0.3;
        }

        if (star.z <= 0 || star.x < 0 || star.x > window.innerWidth || star.y < 0 || star.y > window.innerHeight) {
          star.z = star.baseZ;
          star.x = Math.random() * window.innerWidth;
          star.y = Math.random() * window.innerHeight;
          star.vx = (Math.random() - 0.5) * 0.3;
          star.vy = (Math.random() - 0.5) * 0.3;
        }

        const k = 1000 / star.z;
        const sx = (star.x - cx) * k + cx;
        const sy = (star.y - cy) * k + cy;
        const size = (1 - star.z / 2000) * 0.8;

        const twinkle = 0.5 + 0.5 * Math.sin(time * 0.002 + star.twinkle * 100);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.6})`;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Update and draw planets
      planetsRef.current.forEach((planet) => {
        planet.z -= speed * 0.2;
        planet.x += planet.vx;
        planet.y += planet.vy;
        planet.rotation += 0.01;

        if (planet.z < 100 || planet.x < 0 || planet.x > window.innerWidth || planet.y < 0 || planet.y > window.innerHeight) {
          planet.z = Math.random() * 2000 + 1000;
          planet.x = Math.random() * window.innerWidth;
          planet.y = Math.random() * window.innerHeight;
          planet.vx = (Math.random() - 0.5) * 0.2;
          planet.vy = (Math.random() - 0.5) * 0.2;
          planet.color = `hsl(${Math.random() * 360}, 60%, 50%)`;
          planet.radius = Math.random() * 15 + 5;
          planet.shape = Math.random() < 0.3 ? 'circle' : Math.random() < 0.6 ? 'ringed' : 'weird';
        }

        const k = 1000 / planet.z;
        const sx = (planet.x - cx) * k + cx;
        const sy = (planet.y - cy) * k + cy;
        const r = planet.radius * (1 - planet.z / 3000);

        if (r > 0) {
          const gradient = ctx.createRadialGradient(sx - r * 0.5, sy - r * 0.5, r * 0.2, sx, sy, r);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
          gradient.addColorStop(1, planet.color);
          ctx.fillStyle = gradient;
          ctx.shadowBlur = 8;
          ctx.shadowColor = planet.color;

          if (planet.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, Math.PI * 2);
            ctx.fill();
          } else if (planet.shape === 'ringed') {
            ctx.beginPath();
            ctx.arc(sx, sy, r * 0.7, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = `rgba(255, 255, 255, 0.2)`;
            ctx.lineWidth = r * 0.04;
            ctx.beginPath();
            ctx.ellipse(sx, sy, r * 1.5, r * 0.5, planet.rotation, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(sx + r * Math.cos(0), sy + r * Math.sin(0));
            for (let i = 1; i <= 8; i++) {
              const angle = (i / 8) * Math.PI * 2;
              const offset = r * (0.7 + Math.random() * 0.4);
              ctx.lineTo(sx + offset * Math.cos(angle), sy + offset * Math.sin(angle));
            }
            ctx.closePath();
            ctx.fill();
          }
          ctx.shadowBlur = 0;
        }
      });

      // Update and draw spaceships
      shipsRef.current.forEach((ship) => {
        ship.z -= speed * 0.5;
        ship.x += ship.vx;
        ship.y += ship.vy;
        ship.angle += ship.speed * 0.05;
        ship.vx += (Math.random() - 0.5) * 0.1;
        ship.vy += (Math.random() - 0.5) * 0.1;

        if (ship.z < 100 || ship.x < 0 || ship.x > window.innerWidth || ship.y < 0 || ship.y > window.innerHeight) {
          ship.z = Math.random() * 1500 + 500;
          ship.x = Math.random() * window.innerWidth;
          ship.y = Math.random() * window.innerHeight;
          ship.vx = (Math.random() - 0.5) * 0.5;
          ship.vy = (Math.random() - 0.5) * 0.5;
          ship.angle = Math.random() * Math.PI * 2;
        }

        const k = 1000 / ship.z;
        const sx = (ship.x - cx) * k + cx;
        const sy = (ship.y - cy) * k + cy;
        const size = ship.size * (1 - ship.z / 2000);

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(ship.angle);

        if (ship.type === 'scout') {
          ctx.fillStyle = 'rgba(150, 150, 255, 0.7)';
          ctx.beginPath();
          ctx.moveTo(size, 0);
          ctx.lineTo(-size * 0.5, size * 0.8);
          ctx.lineTo(-size * 0.5, -size * 0.8);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = 'rgba(255, 100, 100, 0.5)';
          ctx.beginPath();
          ctx.arc(-size * 0.5, 0, size * 0.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = 'rgba(200, 200, 200, 0.7)';
          ctx.fillRect(-size * 0.8, -size * 0.3, size * 1.6, size * 0.6);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = size * 0.05;
          ctx.beginPath();
          ctx.moveTo(0, -size * 0.3);
          ctx.lineTo(0, -size * 0.8);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Update and draw satellites (🛰️)
      satellitesRef.current.forEach((satellite) => {
        satellite.z -= speed * 0.4;
        satellite.x += satellite.vx;
        satellite.y += satellite.vy;
        satellite.angle += satellite.speed * 0.03;

        if (satellite.z < 100 || satellite.x < 0 || satellite.x > window.innerWidth || satellite.y < 0 || satellite.y > window.innerHeight) {
          satellite.z = Math.random() * 1500 + 500;
          satellite.x = Math.random() * window.innerWidth;
          satellite.y = Math.random() * window.innerHeight;
          satellite.vx = (Math.random() - 0.5) * 0.4;
          satellite.vy = (Math.random() - 0.5) * 0.4;
          satellite.angle = Math.random() * Math.PI * 2;
        }

        const k = 1000 / satellite.z;
        const sx = (satellite.x - cx) * k + cx;
        const sy = (satellite.y - cy) * k + cy;
        const size = satellite.size * (1 - satellite.z / 2000);

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(satellite.angle);
        ctx.font = `${size * 2}px Arial`;
        ctx.fillStyle = 'rgba(200, 200, 255, 0.8)';
        ctx.fillText('🛰️', -size, size / 2);
        ctx.restore();
      });

      // Update and draw moons (🌑)
      moonsRef.current.forEach((moon) => {
        moon.z -= speed * 0.3;
        moon.x += moon.vx;
        moon.y += moon.vy;
        moon.rotation += 0.005;

        if (moon.z < 100 || moon.x < 0 || moon.x > window.innerWidth || moon.y < 0 || moon.y > window.innerHeight) {
          moon.z = Math.random() * 2000 + 1000;
          moon.x = Math.random() * window.innerWidth;
          moon.y = Math.random() * window.innerHeight;
          moon.vx = (Math.random() - 0.5) * 0.15;
          moon.vy = (Math.random() - 0.5) * 0.15;
        }

        const k = 1000 / moon.z;
        const sx = (moon.x - cx) * k + cx;
        const sy = (moon.y - cy) * k + cy;
        const r = moon.radius * (1 - moon.z / 3000);

        if (r > 0) {
          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate(moon.rotation);
          ctx.font = `${r * 2}px Arial`;
          ctx.fillStyle = 'rgba(180, 180, 180, 0.7)';
          ctx.fillText('🌑', -r, r / 2);
          ctx.restore();
        }
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1;

        const k = 1000 / particle.z;
        const sx = (particle.x - cx) * k + cx;
        const sy = (particle.y - cy) * k + cy;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(sx, sy, particle.size * (particle.life / 100), 0, 2 * Math.PI);
        ctx.fill();

        return particle.life > 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [numStars, numPlanets, numShips, numSatellites, numMoons, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-auto z-0"
      style={{
        background: 'radial-gradient(ellipse at center, #080814 0%, #000000 100%)',
      }}
    />
  );
};

export default StarfieldBackground;