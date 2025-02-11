import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "1️⃣",
    title: "Aprende inglés como aprendiste español",
    description:
      "Olvídate de las reglas aburridas y listas interminables. Con nuestro enfoque natural, absorberás el idioma como cuando eras niño: de forma intuitiva y sin estrés.",
  },
  {
    id: "2️⃣",
    title: "No necesitas tiempo extra",
    description:
      "Integramos el inglés a tu rutina con lecciones rápidas y efectivas. Aprende sin alterar tu día a día.",
  },
  {
    id: "3️⃣",
    title: "Adiós al miedo de hacer el oso",
    description:
      "Desde el primer día, te expones a conversaciones reales y simulacros que te darán confianza para enfrentar el TOEFL o IELTS sin nervios.",
  },
  {
    id: "4️⃣",
    title: "Resultados en tiempo récord",
    description:
      "Con nuestro método, verás progreso en semanas, no en meses. El English Booster Challenge de 21 días te dará resultados tangibles desde el inicio.",
  },
  {
    id: "5️⃣",
    title: "Tecnología que te impulsa",
    description:
      "Utilizamos inteligencia artificial y herramientas interactivas para hacer que tu aprendizaje sea más rápido y eficiente.",
  },
  {
    id: "🌟",
    title: "Somos diferentes",
    description:
      "Desde lo esencial hasta certificaciones, nuestro enfoque práctico y dinámico te sumerge en el idioma con contenido real, IA y una comunidad global.",
  },
];

const HowToDoIt = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-16 mt-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          💡 Deja atrás las excusas:{" "}
          <span className="text-yellow-400">¡Aquí está la solución!</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-12"
        >
          Sabemos lo que te detiene. Nuestro método va directo al grano, sin
          rodeos ni teorías aburridas. ¡Dile adiós a la frustración y aprende
          inglés con un sistema diseñado para TI!
        </motion.p>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                {step.id} {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToDoIt;
