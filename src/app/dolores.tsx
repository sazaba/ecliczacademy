import React from "react";

const Dolores = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-10 text-gray-900 tracking-tight leading-tight">
          ¡No Dejes Que El Inglés Te Detenga!
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-12">
          ¿Te has encontrado con alguno de estos problemas? ¡Es hora de cambiar eso!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            { 
              title: "¿Estancado?", 
              text: "¿Llevas mil años con el inglés y sigues sin saber cómo decir 'hello' sin miedo? 😅" 
            },
            { 
              title: "¿Miedo al Inglés?", 
              text: "¿El inglés te parece un monstruo? 😱 ¡Es más fácil de lo que crees, te lo juro!" 
            },
            { 
              title: "¿Oportunidades Perdidas?", 
              text: "¿Estás dejando que el inglés te robe tus sueños? 🤑 ¡Ya basta!" 
            },
            { 
              title: "¿Sin Viajar?", 
              text: "¿Sigues evitando viajar por miedo a no entender? 🌎 ¡El inglés no es tan complicado!" 
            },
            { 
              title: "¿Sin Dirección?", 
              text: "¿No sabes por dónde empezar? Te damos el camino directo. 🚀" 
            },
            { 
              title: "¿Sin Resultados?", 
              text: "¿Te matas estudiando y no ves cambios? 🙄 ¡Es hora de un enfoque rápido!" 
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg text-left transform hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-2">🔥</span>{item.title}
              </h2>
              <p className="text-white text-base">
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

