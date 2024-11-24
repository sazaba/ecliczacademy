const FAQ = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Sección: ¿Cómo son las clases? */}
        <div>
          <h2 className="text-3xl text-indigo-800 md:text-4xl font-bold text-center mb-8">
            ¿Cómo son las clases? 📚
          </h2>
          <div className="grid gap-8 md:grid-cols-1">
            {/* Tarjeta 1 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-yellow-400 text-lg font-bold mb-4">
                🌱 Fundamentos desde el primer día:
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Aprenderás frases simples y útiles desde el principio, sin teorías complicadas. Aquí aprendes aplicando y sintiéndote cómodo desde el inicio.
              </p>
            </div>
            {/* Tarjeta 2 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-yellow-400 text-lg font-bold mb-4">
                🎯 Domina las 4 habilidades clave:
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Te enseñamos a <span className="text-yellow-400">leer, escribir, escuchar y hablar</span> con confianza, usando herramientas interactivas y tecnología de inteligencia artificial.
              </p>
            </div>
            {/* Tarjeta 3 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-yellow-400 text-lg font-bold mb-4">
                🎬 Clases dinámicas con series y películas:
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Aprende vocabulario y expresiones reales mientras disfrutas de contenido que te encanta. ¡Es como aprender viendo tu serie favorita!
              </p>
            </div>
          </div>
        </div>

        {/* Sección: Preguntas Frecuentes */}
        <div>
          <h2 className="text-3xl text-indigo-800 md:text-4xl font-bold text-center mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="grid gap-8 md:grid-cols-1">
            {/* Pregunta 1 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-yellow-400 text-lg font-bold mb-4 text-center">
                ⏱️ ¿Cuánto tiempo tomará aprender inglés?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Todo depende de tu dedicación. Según nuestros estudiantes, estos son los tiempos promedio:
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>En 3 meses dedicando 2 horas al día.</li>
                <li>En 6 meses estudiando 1 hora diaria.</li>
                <li>En 12 meses con solo 30 minutos diarios.</li>
                <li>En 24 meses con apenas 15 minutos al día.</li>
              </ul>
            </div>
            {/* Pregunta 2 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-yellow-400 text-lg font-bold mb-4 text-center">
                🤔 ¿Qué nivel necesito para empezar?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                ¡Ninguno! Este curso está diseñado para principiantes absolutos. No necesitas experiencia previa con el inglés. Si ya sabes algo, genial, tendrás una ventaja, pero no es un requisito.
              </p>
            </div>
            {/* Pregunta 3 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-yellow-400 text-lg font-bold mb-4 text-center">
                🌟 ¿Qué nivel alcanzaré al finalizar?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Al completar el programa, tendrás una <span className="text-yellow-400 font-semibold">fluidez conversacional</span> que te permitirá:
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                <li>Comprender inglés cotidiano sin esfuerzo ni traducciones mentales.</li>
                <li>Leer y entender textos fácilmente.</li>
                <li>Escribir y tener conversaciones fluidas sin miedo a cometer errores.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
