import React from "react";

const Dolores = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-10 text-gray-900 tracking-tight leading-tight">¡Las Barreras del Inglés No Definen Tu Futuro!</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          Si alguna vez has sentido que el inglés es un obstáculo, estás en el lugar correcto. Estas experiencias resuenan con muchos, pero también son el punto de partida para un cambio poderoso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Estancamiento", 
              text: "Llevo tanto tiempo estudiando inglés que no entiendo por qué sigo en el mismo nivel." 
            },
            { 
              title: "Miedo al Idioma", 
              text: "Siempre siento que el inglés no es para mí, me parece abrumador e inalcanzable." 
            },
            { 
              title: "Oportunidades Perdidas", 
              text: "No pude acceder a mi trabajo soñado por no dominar el inglés." 
            },
            { 
              title: "Viajes Inseguros", 
              text: "Evito viajar porque me paraliza la idea de no poder comunicarme en otro idioma." 
            },
            { 
              title: "Falta de Guía", 
              text: "Me siento sin dirección en mi proceso de aprendizaje del inglés." 
            },
            { 
              title: "Falta de Resultados", 
              text: "He probado otros cursos, pero siento que no avanzo como debería." 
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg text-left transform hover:translate-y-1 transition-transform"
            >
              <h2 className="text-xl font-semibold text-indigo-600 mb-4">⭐ {item.title}</h2>
              <p className="text-gray-800 text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dolores;
