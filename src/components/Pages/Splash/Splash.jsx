import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';
import '../Splash/splash.css';

const SplashPage = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const createParticle = (x, y) => {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.width = '50px';
    particle.style.height = '50px';
    particle.style.backgroundColor = 'var(--teal)';
    particle.style.borderRadius = '100%';
    document.body.appendChild(particle);
    return particle;
  };

  const explode = (x, y) => {
    const particles = [];
    for (let i = 0; i < 25; i++) {
      particles.push(createParticle(x, y));
    }
    particles.forEach((particle) => {
      anime({
        targets: particle,
        translateX: anime.random(-200, 200),
        translateY: anime.random(-200, 200),
        scale: [1, 0],
        easing: 'easeOutExpo',
        duration: anime.random(1000, 1300),
        complete: () => document.body.removeChild(particle),
      });
    });
  };

  const handleClick = (e) => {
    // Get button's position
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    explode(x, y);
    buttonRef.current.style.display = 'none';
    setTimeout(() => navigate('/aboutme'), 1000); // Delay navigation to allow explosion to be seen
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundImage: 'url("https://wallpaperxyz.com/wp-content/uploads/FUll-HD-1080p-Wallpaper-Full-HD-Free-Download-PC-Laptop-MacOS-Wallpaperxyz.com-48.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
       <h1 id="mainTitle">Welcome to my portfolio!</h1>
       <br></br>
      <p></p>
      <br></br>
      <button 
        className="button is-large is-rounded enter-button" 
        onClick={handleClick} 
        ref={buttonRef}
      >
        Enter
      </button>
    </div>
  );
};

export default SplashPage;
