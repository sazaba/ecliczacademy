import React, { useEffect, useState } from "react";
import { ClockIcon, FireIcon } from "@heroicons/react/24/solid";


const FloatingUrgency = () => {
  const [viewers, setViewers] = useState(3);
  const [slots, setSlots] = useState(5);

  useEffect(() => {
    const viewersInterval = setInterval(() => {
      setViewers((prev) => Math.max(1, prev + Math.floor(Math.random() * 3 - 1)));
    }, 5000);

    const slotsInterval = setInterval(() => {
      setSlots((prev) => (prev > 1 ? prev - 1 : prev));
    }, 10000);

    return () => {
      clearInterval(viewersInterval);
      clearInterval(slotsInterval);
    };
  }, []);

  return (
    <div className="z-50 fixed bottom-6 inset-x-0 mx-auto 
  bg-gradient-to-r from-red-500 to-orange-400 text-white text-sm md:text-base 
  font-bold py-3 rounded-xl shadow-lg border border-red-600 
  flex items-center justify-between space-x-4 w-full max-w-lg px-6 
  animate-bounce hover:animate-none transition-all duration-300">

  

      
      <FireIcon className="w-6 h-6 text-yellow-300 animate-pulse" />
      
      <span className="flex-grow text-center">
        <strong>{viewers}</strong> personas están viendo esto ahora. <br />
        ¡Solo <strong>{slots}</strong> cupos disponibles!  
      </span>

      <div className="bg-white text-red-600 text-xs px-3 py-1 rounded-lg shadow-md 
        flex items-center space-x-1 font-bold">
        <ClockIcon className="w-4 h-4" />
        <span>¡Rápido!</span>
      </div>
    </div>
  );
};

export default FloatingUrgency;

