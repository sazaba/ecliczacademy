"use client"; // Marca este archivo como componente de cliente

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VideoPlayer from './VideoPlayer'; 
import testimonyOne from './images/T1.webp'


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
      <div className="w-full bg-red-600 text-white text-center py-4 px-3 mb-6 rounded-md shadow-lg animate-pulse hover:animate-bounce">
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
      <div className="w-full mt-5 bg-blue-950 text-white text-center py-4 px-3 mb-6 rounded-md shadow-lg animate-pulse hover:animate-bounce">
      <p>☝️☝️☝️☝️☝️☝️</p>
        <h2 className="text-xl md:text-3xl font-bold uppercase">
          ¡Mira el Video y Descubre la Formula Para Aprender!
        </h2>
        
      </div>

      {showMessage && (
        <div className="message-container mt-6 bg-white p-6 shadow-lg rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¡Has descubierto la fórmula para aprender inglés de forma natural y efectiva!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Con nuestro método nativo, basado en cómo aprendemos español, lograrás hablar inglés en solo unos meses, sin frustraciones. Además, con el apoyo de inteligencia artificial, acelerarás el proceso y desbloquearás nuevas oportunidades laborales, educativas y personales.
          </p>

          <div className="cta-buttons mb-6">
  <a
    href="https://pay.hotmart.com/N93858012D?checkoutMode=10"
    className="bg-orange-500 text-white py-3 px-2 rounded-full text-lg font-semibold transition transform animate-pulse duration-1000 hover:bg-orange-600"
  >
    QUIERO UNIRME AL ENTRENAMIENTO
  </a>
</div>

          <p className="text-gray-700 text-lg mb-6">
            Si realmente quieres aumentar tu salario, viajar al extranjero y entender contenido en inglés sin barreras, este curso es para ti.
          </p>

          <div className="offer-details mb-6 bg-gradient-to-r from-orange-100 via-white to-orange-100 p-6 rounded-lg shadow-lg">
  <p className="font-semibold text-lg text-gray-800">
    Este es el último curso de inglés que necesitarás. Aprende de manera efectiva, rápida y sin complicaciones.
  </p>
  <div className="flex items-center justify-between mt-4">
    <p className="text-lg text-gray-500 line-through">
      Antes: <span className="font-bold">$1000 USD</span>
    </p>
    <p className="text-2xl text-orange-500 font-bold">
      Ahora: <span className="text-green-600">$80 USD</span>
    </p>
  </div>
  <p className="text-sm text-gray-600 mt-4 italic">
    (Disponible solo por las próximas 24 horas)
  </p>
</div>

<div className="flex flex-col items-center justify-center">
        <Image 
          src={testimonyOne}
          alt="Descripción de la primera imagen" 
          width={950} // Ajusta el tamaño según sea necesario
          height={950}
          quality={80} // Ajusta la calidad según sea necesario        
        />
      </div>


          {showCountdown && (
            <div className="w-full max-w-md mx-auto bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg p-6 shadow-lg text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                ¡Oferta Especial Solo por <span className="text-yellow-300">24 Horas</span>!
              </h2>
              <p className="text-lg mb-6">
                Aprovecha esta oportunidad única antes de que se termine el tiempo:
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-3xl font-bold">{timeLeft.hours}</span>
                  <p className="text-sm">Horas</p>
                </div>
                <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                  <p className="text-sm">Minutos</p>
                </div>
                <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
                  <span className="text-3xl font-bold">{timeLeft.seconds}</span>
                  <p className="text-sm">Segundos</p>
                </div>
              </div>
              <p className="text-sm text-yellow-200">
                ¡No dejes pasar esta oportunidad de transformar tu inglés y abrir nuevas puertas!
              </p>
            </div>
          )}

<div className="cta-buttons mb-6">
  <a
    href="https://pay.hotmart.com/N93858012D?checkoutMode=10"
    
    className="bg-orange-500 text-white py-3 px-2 rounded-full text-lg font-semibold transition transform animate-pulse duration-1000 hover:bg-orange-600"
  >
    QUIERO UNIRME AL ENTRENAMIENTO
  </a>
</div>

<div className="mb-12 flex justify-center">
  <div className="max-w-4xl w-full">
    <p className="font-semibold text-xl text-gray-800 mb-4 text-center">
      <span className="text-orange-500">BENEFICIOS EXCLUSIVOS:</span>
    </p>
    
    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl shadow-xl text-white font-bold">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
          <span>Acceso vitalicio al curso con un solo pago.</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
          <span>Varios miembros de tu familia pueden estudiar con el mismo acceso.</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
          <span>Pago en 12 cuotas con tu tarjeta de crédito.</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
          <span>Acompañamiento directo vía WhatsApp para resolver cualquier duda.</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
          <span>Revisión de tareas sin límite.</span>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="flex justify-center mt-8">
  <a 
    href="https://wa.link/yeyxkr" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
  >
    <i className="fab fa-whatsapp w-8 mr-3"></i>
    <span className="text-lg font-medium">Contacta conmigo en WhatsApp</span>
  </a>
</div>
        </div>
      )}
    </main>
  );
}
