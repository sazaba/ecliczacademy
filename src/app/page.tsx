"use client";

import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VideoPlayer from "./VideoPlayer";

export default function Home() {
  const [showCountdown, setShowCountdown] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Calcula el tiempo restante a partir de la fecha límite
  const calculateTimeLeft = (deadline) => {
    const now = Date.now();
    const diff = deadline - now;

    if (diff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    const delay = 330000; // 5 minutos y 30 segundos
    const deadline = Date.now() + 24 * 60 * 60 * 1000; // 24 horas desde el inicio

    const timer = setTimeout(() => {
      setShowCountdown(true);
    }, delay);

    const interval = setInterval(() => {
      if (showCountdown) {
        setTimeLeft(calculateTimeLeft(deadline));
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [showCountdown]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2">
      <div className="w-full bg-red-600 text-white text-center py-4 px-3 mb-6 rounded-md shadow-lg animate-pulse hover:animate-bounce">
        <h2 className="text-xl md:text-3xl font-bold uppercase">
          ¡Descubre la Fórmula Infalible para Aprender Inglés!
        </h2>
        <p className="mt-2 text-base md:text-xl">
          Tan Efectiva que No Alcanzar tus Metas Será Casi Imposible
        </p>
      </div>

      <h1 className="text-2xl md:text-5xl font-extrabold text-center text-gray-800 mb-3 leading-6">
        <span className="text-orange-500">Domina</span> el Inglés en poco{" "}
        <span className="text-orange-500">Tiempo</span>, <span className="text-orange-500">Abre Oportunidades</span>{" "}
        para <span className="text-orange-500">Aumentar tu Salario</span>, <span className="text-orange-500">Viajar</span>{" "}
        y <span className="text-orange-500">Entender Todo</span> en Inglés{" "}
        <span className="text-orange-500">¡Sin Barreras!</span>
      </h1>

      <p className="text-xs md:text-lg text-center text-gray-700 mb-4 px-4">
        En los siguientes minutos, descubrirás cómo dominar el inglés rápidamente con una fórmula comprobada que te llevará
        a resultados sorprendentes, ¡sin estrés ni frustraciones! 👇👇
      </p>

      <div className="w-full max-w-4xl aspect-video">
        <VideoPlayer />
      </div>

      <div className="w-full mt-5 bg-blue-950 text-white text-center py-4 px-3 mb-6 rounded-md shadow-lg animate-pulse hover:animate-bounce">
        <h2 className="text-xl md:text-3xl font-bold uppercase">
          ¡Espera a que finalice el video para desbloquear la oferta!
        </h2>
        <p>👇👇🏻👇🏼👇🏽👇🏾👇🏿</p>
      </div>

      {showCountdown && (
        <div className="w-full max-w-md mx-auto bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg p-6 shadow-lg text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            ¡Oferta Especial Solo por <span className="text-yellow-300">24 Horas</span>!
          </h2>
          <div className="flex justify-center space-x-4 mb-4">
            {["Horas", "Minutos", "Segundos"].map((label, index) => (
              <div key={label} className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                <span className="text-3xl font-bold">
                  {Object.values(timeLeft)[index].toString().padStart(2, "0")}
                </span>
                <p className="text-sm">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-yellow-200">
            ¡No dejes pasar esta oportunidad de transformar tu inglés y abrir nuevas puertas!
          </p>
        </div>
      )}
    </main>
  );
}
