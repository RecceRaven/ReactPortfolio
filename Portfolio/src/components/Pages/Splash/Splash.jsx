import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';

const SplashPage = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  const handleClick = () => {
    anime.timeline({
      complete: () => navigate('/aboutme')
    })
    .add({
      targets: buttonRef.current,
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      rotate: {
        value: '+=2turn', // rotates by two full turns
        easing: 'easeInOutSine',
        duration: 1800,
      },
      borderRadius: ['0%', '100%'], // Morphs the button into a circular shape
      duration: 1600,
      easing: 'easeInOutQuad',
    })
;
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
      <button 
        className="button is-large enter-button" 
        onClick={handleClick} 
        ref={buttonRef}
      >
        Enter
      </button>
    </div>
  );
};

export default SplashPage;
