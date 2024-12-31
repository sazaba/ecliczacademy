import React from 'react';

const GuaranteeBanner = () => {
  return (
    <div className="mt-8 relative bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl p-8 shadow-lg max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
      <div className="absolute top-0 right-0 bg-white text-green-500 font-bold py-1 px-3 rounded-bl-xl">
        ¡7 días de garantía!
      </div>
      <h2 className="text-3xl font-extrabold mb-4">Sin riesgos, todo a tu favor</h2>
      <p className="text-lg mb-6">
        Si el contenido no cumple con tus expectativas, te devolvemos cada peso. Lo peor que puede pasar es que tengas una semana GRATIS para explorar.
      </p>
      
      <div className="mt-6 text-sm text-green-100 italic">
        *Sin preguntas, sin preocupaciones. Tu satisfacción es nuestra prioridad.
      </div>
    </div>
  );
};

export default GuaranteeBanner;
