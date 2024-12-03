import React from 'react'

function testimonio() {
  return (
    <div className="bg-white text-gray-900 py-12 px-8 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
      No lo decimos nosotros, ¡lo dicen ellos!
    </h2>
    <p className="text-lg text-gray-700 mb-8">
      Descubre cómo personas como tú han transformado sus vidas al aprender
      inglés con nosotros.
    </p>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Video Testimonial 1 */}
      <div className="w-full lg:w-1/2">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/aTTfZ1uTL6c"
          title="Testimonio 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Testimonial 2 */}
      <div className="w-full lg:w-1/2">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ZGvxnPEOWdk"
          title="Testimonio 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full lg:w-1/2">
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/cCaLitbF21s"
    title="Testimonio 3"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

    </div>
  </div>
</div>

  )
}

export default testimonio