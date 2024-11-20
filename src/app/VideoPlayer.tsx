import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Cargar el script solo una vez cuando el componente se monta
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/5e5ade62-7791-40c2-9448-5d44e3eb6a82/players/673e335960188f000b37f91d/player.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Limpiar el script al desmontar el componente
      document.head.removeChild(script);
    };
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez

  return (
    <div id="vid_673e335960188f000b37f91d" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
      <img 
        id="thumb_673e335960188f000b37f91d"
        src="https://images.converteai.net/5e5ade62-7791-40c2-9448-5d44e3eb6a82/players/673e335960188f000b37f91d/thumbnail.jpg"
        alt="thumbnail"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div 
        id="backdrop_673e335960188f000b37f91d" 
        style={{ 
          WebkitBackdropFilter: 'blur(5px)', 
          backdropFilter: 'blur(5px)', 
          position: 'absolute', 
          top: 0, 
          height: '100%', 
          width: '100%' 
        }} 
      />
    </div>
  );
};

export default VideoPlayer;
