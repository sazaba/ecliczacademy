import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ebook from "./images/ebook.webp";
import Link from "next/link";

const Platform: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white py-20 px-8 rounded-2xl shadow-black shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Contenido */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Potencia tu aprendizaje <br />
            con nuestro <span className="text-blue-400">E-Book Interactivo</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Domina el inglés con herramientas avanzadas, contenido exclusivo 
            y una experiencia intuitiva que se adapta a ti.
          </p>
          <Link
      href="https://mpago.li/13JwwNx"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all text-white text-lg font-semibold rounded-full shadow-lg text-center"
    >
      📖 Descarga Ahora
    </Link>
        </motion.div>

        {/* Imagen del E-Book */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src={ebook}
            alt="Mockup Ebook"
            width={600}
            height={800}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;

