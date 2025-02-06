import React from 'react';

const PromotionBanner = () => {
  const getTomorrow = () => {
    const daysOfWeek = [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ];
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dayName = daysOfWeek[tomorrow.getDay()];
    const day = tomorrow.getDate();
    const month = tomorrow.toLocaleString('es-ES', { month: 'long' });

    return `${dayName}, ${day} de ${month}`;
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-center py-10 px-6 rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/sparkles.svg')] bg-cover opacity-20 pointer-events-none"></div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
        ¡Oferta limitada!
      </h2>
      <p className="text-lg md:text-2xl mt-4 font-semibold">
        El descuento termina <span className="text-yellow-300">mañana</span>:
      </p>
      <p className="text-xl md:text-3xl mt-2 font-bold text-red-300 animate-pulse">
        {getTomorrow()}
      </p>
      <button
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
        onClick={() => alert('¡Oferta activada!')}
      >
        ¡Aprovechar ahora!
      </button>
    </div>
  );
};

export default PromotionBanner;
