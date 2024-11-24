import React from "react";

const HowToDoIt = () => {
  return (
    <section className="bg-indigo-50 text-gray-900 py-12 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 text-center mb-6">
          💡 Deja atrás las excusas: ¡Nosotros tenemos la solución! 💡
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Sabemos exactamente lo que te detiene, y es por eso que creamos un método que va directo al grano, sin rodeos ni teorías aburridas. Aquí no hay más tiempo perdido ni frustraciones.
        </p>

        {/* Contenido de los pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">1️⃣ Aprende inglés como aprendiste español</h3>
            <p className="text-gray-700">
              Sin listas interminables ni reglas complicadas. Con nuestro enfoque natural, aprenderás inglés como cuando eras niño: sencillo, práctico y sin estrés.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">2️⃣ No necesitas tiempo extra</h3>
            <p className="text-gray-700">
              Lecciones rápidas y efectivas que se adaptan a tu vida diaria. Aprende mientras haces tu día a día, sin sacrificar tu rutina.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">3️⃣ Adiós al miedo de hacer el oso</h3>
            <p className="text-gray-700">
              Practica conversaciones reales desde el primer día y prepárate para el TOEFL o IELTS con simulacros que te darán confianza.
            </p>
          </div>

          {/* Paso 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">4️⃣ Resultados reales en poco tiempo</h3>
            <p className="text-gray-700">
              Con nuestro English Booster Challenge de 21 días, verás progreso desde la primera semana. ¡Lo que no lograste en meses, aquí lo consigues en días!
            </p>
          </div>

          {/* Paso 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">5️⃣ Herramientas del futuro</h3>
            <p className="text-gray-700">
              Usamos inteligencia artificial y recursos interactivos personalizados para optimizar tu tiempo y esfuerzo.
            </p>
          </div>

          {/* Únicos */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600 mb-3">🌟 ¿Por qué somos únicos?</h3>
            <p className="text-gray-700">
              Somos TU guía completa, desde lo esencial hasta certificaciones. Aprende con series, películas y situaciones reales en una comunidad global y con INTELIGENCIA ARTIFICAL!.
            </p>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default HowToDoIt;
