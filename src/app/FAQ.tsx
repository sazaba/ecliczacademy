const FAQ = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Sección: ¿Cómo son las clases? */}
        <div>
  <h2 className="text-3xl text-indigo-800 md:text-4xl font-extrabold text-center mb-10">
    ¿Que aprendere en este e-book? 📚
  </h2>
  <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
    {/* Tarjeta 1 - Nativos de todo el mundo */}
    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:scale-105">
      <p className="text-2xl font-bold mb-4">
        🌎 Habla con nativos de todo el mundo:
      </p>
      <p className="text-lg leading-relaxed">
        Te conectamos con hablantes nativos para que practiques conversaciones reales. ¡La inmersión total está aquí! Habla, aprende y mejora como lo harías en un país de habla inglesa.
      </p>
    </div>
    {/* Tarjeta 2 - Inteligencia Artificial */}
    <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:scale-105">
      <p className="text-2xl font-bold mb-4">
        🤖 Herramientas de IA para practicar conversaciones:
      </p>
      <p className="text-lg leading-relaxed">
        Utilizamos inteligencia artificial para crear escenarios de conversación personalizados. Practica situaciones cotidianas y mejora tu fluidez de manera interactiva y adaptada a tu nivel.
      </p>
    </div>
    {/* Tarjeta 3 - Fundamentos */}
    <div className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:scale-105">
      <p className="text-2xl font-bold mb-4">
        🌱 Fundamentos desde el primer día:
      </p>
      <p className="text-lg leading-relaxed">
        Aprenderás frases simples y útiles desde el principio, sin teorías complicadas. Aquí aprendes aplicando y sintiéndote cómodo desde el inicio.
      </p>
    </div>
    {/* Tarjeta 4 - Habilidades clave */}
    <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:scale-105">
      <p className="text-2xl font-bold mb-4">
        🎯 Domina las 4 habilidades clave:
      </p>
      <p className="text-lg leading-relaxed">
        Te enseñamos a <span className="text-yellow-400">leer, escribir, escuchar y hablar</span> con confianza, usando herramientas interactivas y tecnología de inteligencia artificial.
      </p>
    </div>
    {/* Tarjeta 5 - Clases dinámicas */}
    <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:scale-105">
      <p className="text-2xl font-bold mb-4">
        🎬 Clases dinámicas con series y películas:
      </p>
      <p className="text-lg leading-relaxed">
        Aprende vocabulario y expresiones reales mientras disfrutas de contenido que te encanta. ¡Es como aprender viendo tu serie favorita!
      </p>
    </div>
  </div>
</div>



        {/* Sección: Preguntas Frecuentes */}
      
      </div>
    </section>
  );
};

export default FAQ;
