"use client"; // Marca este archivo como componente de cliente

import React, { useEffect, useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoPlayer from './VideoPlayer'; 
import Dolores from './dolores';
import Testimonios from './testimonio';
import HowToDoIt from './HowToDoIt';
import FAQ from './FAQ';
import Bonus from './Bonus';
import Cta from './Cta';
import Image from 'next/image';
import M5 from "./images/M5.webp"
import M1 from "./images/M1.webp"



export default function Home() {

  
  const [showMessage, setShowMessage] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const deadlineRef = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Calculamos el tiempo restante en base a la fecha límite
  const calculateTimeLeft = () => {
    if (!deadlineRef.current) return { hours: 0, minutes: 0, seconds: 0 };
    const now = new Date().getTime();
    const timeLeft = deadlineRef.current - now;

    if (timeLeft <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      setShowCountdown(true);
      deadlineRef.current = new Date().getTime() + 24 * 60 * 60 * 1000; // Establece la fecha límite (24 horas)
    }, 10000);
  
    return () => clearTimeout(timer);
  }, []);
  // Iniciar el temporizador solo cuando se muestre la cuenta regresiva
  useEffect(() => {
    if (showCountdown) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        
      }, 1000);

      return () => clearInterval(timer); // Limpiamos el temporizador cuando el componente se desmonta o showCountdown cambia
    }
  }, [showCountdown]);
 
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-2">
      <div className="w-full bg-red-600 text-white text-center py-4 px-3 mb-6 rounded-md shadow-lg  animate-pulse">
        <h2 className="text-xl md:text-3xl font-bold uppercase">
          ¡Descubre la Fórmula Infalible para Aprender Inglés!
        </h2>
        <p className="mt-2 text-base md:text-xl">
          Tan Efectiva que No Alcanzar tus Metas Será Casi Imposible
        </p>
      </div>
      

      <h1 className="text-2xl md:text-5xl font-extrabold text-center text-black mb-6 leading-6">
  <span className="text-black underline">¡Transforma</span> tu vida 
  <span className="bg-orange-500 text-white px-2 py-1 rounded inline-block underline">aprendiendo</span> Inglés!<br /><br />
  <span className="text-black underline">Domina </span>  
  <span className="bg-orange-500 text-white px-2 py-1 rounded inline-block underline">tiempo récord</span>, 
  <span className="bg-orange-500 text-white px-1 py-1 rounded inline-block underline">multiplica tus oportunidades</span> y 
  <span className="bg-orange-500 text-white px-1 py-1 rounded inline-block underline">consigue el éxito</span> que mereces.
</h1>







      <p className="text-xs md:text-lg text-center text-gray-700 mb-4 px-4">
        En los siguientes minutos, descubrirás cómo dominar el inglés rápidamente con una fórmula comprobada que te llevará a resultados sorprendentes, ¡sin estrés ni frustraciones! 👇👇
      </p>

      <div className="w-full max-w-4xl aspect-video">
      <VideoPlayer /> 
      </div>
      <div className="w-full mt-5 bg-indigo-600 text-white text-center py-4 px-3 mb-6 rounded-md shadow-lg animate-pulse hover:animate-bounce">
      <p>☝️☝️☝️☝️☝️☝️</p>
        <h2 className="text-lg md:text-3xl font-bold uppercase">
        No te lo pierdas, al final del video encontrarás una sorpresa:🎁!
        </h2>
        
      </div>

      {showMessage && (
        <div className="message-container mt-6 bg-white  shadow-lg rounded-lg text-center">
          <Dolores/>
          <Cta/>
          <div className="mt-3">
            <Image
              src={M5} // Cambia esta ruta por la de tu imagen
              alt="Persona que dio un testimonio"
              className="w-full rounded-xl"
            />
          </div>
          
          <Testimonios/>
          <Cta/>
          <HowToDoIt/>
          <Cta/>
          <div className="mt-3">
            <Image
              src={M1} // Cambia esta ruta por la de tu imagen
              alt="Persona que dio un testimonio"
              className="w-full rounded-xl"
            />
          </div>
          <FAQ/>
          <Cta/>
          <Bonus/>
          

          {showCountdown && (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-full shadow-lg text-center text-xs z-50 animate-pulse">
    ⏳ ¡Oferta Especial! Tiempo restante:{" "}
    <span className="font-bold">
      {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  </div>
)}

        </div>
      )}
    </main>
  );
}
