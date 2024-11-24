
import React from "react";


const Dolores = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-12 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">¿Te sientes identificado?</h1>
        <p className="text-lg mb-8">
          Aprende inglés de una vez por todas con un método que realmente funciona.  
          Si alguna vez has pensado o sentido esto, no estás solo.
        </p>

        <div className="space-y-6">
          {[
            "“Llevo años intentando aprender y no paso del ‘Hello, my name is.’”",
            "“El inglés es muy difícil, yo no nací para eso.”",
            "“Ya perdí muchas oportunidades por no saber inglés.”",
            
            "“Viajar a Estados Unidos o Europa me da miedo por el idioma.”",
            
            "“Siento que no tengo a nadie que me guíe de verdad.”",
            
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 p-4 md:p-6 rounded-lg shadow-lg flex items-center justify-center text-center"
            >
              <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
            </div>
          ))}
        </div>
        
        
      </div>
      
      
    </section>
  );
};

export default Dolores;
