import React, { useEffect } from "react";
import Image from "next/image";
import T1 from "./images/T1.webp";

const Testimonios = () => {
  useEffect(() => {
    // Cargar los scripts de ambos videos cuando el componente se monta
    const script1 = document.createElement("script");
    script1.src =
      "https://scripts.converteai.net/5e5ade62-7791-40c2-9448-5d44e3eb6a82/players/6743992d1bb01e000b070fb5/player.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://scripts.converteai.net/5e5ade62-7791-40c2-9448-5d44e3eb6a82/players/674399731e0c82000bc2623b/player.js";
    script2.async = true;
    document.head.appendChild(script2);

    return () => {
      // Limpiar los scripts al desmontar el componente
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []); // El array vacío asegura que solo se ejecuta una vez

  return (
    <section className="bg-white text-gray-900 py-12 px-8 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
          No lo decimos nosotros, ¡lo dicen ellos!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Descubre cómo personas como tú han transformado sus vidas al aprender
          inglés con nosotros.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Imagen del testimonio */}
          <div className="w-full lg:w-1/3">
            <Image
              src={T1}
              alt="Persona que dio un testimonio"
              className="w-full"
            />
          </div>

          {/* Videos Testimoniales */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 gap-6">
            {/* Video Testimonial 1 */}
            <div
              id="vid_6743992d1bb01e000b070fb5"
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
              }}
            >
              <img
                id="thumb_6743992d1bb01e000b070fb5"
                src="https://images.converteai.net/5e5ade62-7791-40c2-9448-5d44e3eb6a82/players/6743992d1bb01e000b070fb5/thumbnail.jpg"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                alt="thumbnail"
              />
              <div
                id="backdrop_6743992d1bb01e000b070fb5"
                style={{
                  WebkitBackdropFilter: "blur(5px)",
                  backdropFilter: "blur(5px)",
                  position: "absolute",
                  top: 0,
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </div>

            {/* Video Testimonial 2 */}
            <div
              id="vid_674399731e0c82000bc2623b"
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
              }}
            >
              <img
                id="thumb_674399731e0c82000bc2623b"
                src="https://images.converteai.net/5e5ade62-7791-40c2-9448-5d44e3eb6a82/players/674399731e0c82000bc2623b/thumbnail.jpg"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                alt="thumbnail"
              />
              <div
                id="backdrop_674399731e0c82000bc2623b"
                style={{
                  WebkitBackdropFilter: "blur(5px)",
                  backdropFilter: "blur(5px)",
                  position: "absolute",
                  top: 0,
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
