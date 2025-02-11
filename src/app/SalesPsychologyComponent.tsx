import React, { useEffect, useState } from 'react';

const SalesPsychologyComponent = () => {
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(now.getHours() + 2, 0, 0, 0); // 2 horas desde ahora

    const difference = targetTime.getTime() - now.getTime(); // Diferencia en milisegundos

    if (difference <= 0) {
      return '00:00:00'; // Si ya pasaron las 2 horas
    }

    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // Inicializar al montar el componente

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="text-center  py-10 px-8 md:px-14 bg-gradient-to-r from-indigo-700 to-purple-600 text-white rounded-2xl shadow-lg shadow-black">
      <h2 className="text-4xl font-extrabold mb-5 uppercase tracking-wide animate-pulse">
        ¡Oferta Exclusiva por Tiempo Limitado! 🚀 
      </h2>
      <p className="text-lg md:text-xl mb-6 font-medium">
        ¡Aprende inglés por menos de $1.500 COP diarios!
      </p>

      <div className="flex justify-center items-center space-x-10 mb-8">
        <div className="text-2xl md:text-3xl font-semibold text-gray-300 line-through">
          <p>Antes:</p>
          <span className="text-gray-400">$89.99</span>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-green-400 bg-white px-6 py-3 rounded-xl shadow-md">
          <p>Ahora:</p>
          <span>$9.99</span>
        </div>
      </div>

      <div className="bg-white text-gray-900 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-2xl font-bold mb-3 text-center">
          🔥 ¡No dejes pasar esta oportunidad!
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Otros ebooks similares cuestan entre <span className="font-bold">$80 y $120 USD</span>.
        </p>
        <p className="text-xl font-bold text-red-600">
          Esta oferta termina en: 
          <span className="text-yellow-500 text-2xl ml-2">{timeLeft}</span>
        </p>
      </div>
      

    </div>
  );
};

export default SalesPsychologyComponent;
