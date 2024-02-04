import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';

const SplashPage = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null); // Create a ref for the button

  const handleClick = () => {
    anime({
        targets: 'button',
        scale: [
          {value: .7, duration: 500, easing: 'easeOutSine'},
          {value: 1, duration: 500, easing: 'easeInOutQuad'}
        ],
        rotate: '1turn',
        loop: false,
        direction: 'alternate',
        easing: 'easeInOutSine',
        complete: () => navigate('/aboutme')
      });
      
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundImage: 'url("https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMzM5MTA3fHxlbnwwfHx8fHw%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
    }}>
      <button 
        className="button is-large is-primary" 
        onClick={handleClick}
        ref={buttonRef} // Attach the ref to the button
      >
        Enter
      </button>
    </div>
  );
};

export default SplashPage;
