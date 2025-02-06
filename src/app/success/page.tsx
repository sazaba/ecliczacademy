// app/success/page.tsx
"use client"; // Necesario para que useEffect funcione correctamente en Next.js

import React, { useEffect } from "react";

const SuccessPage: React.FC = () => {
  useEffect(() => {
    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const amount = params.get("amount");
    const email = params.get("payer_email");
    const eventID = Date.now().toString(); // Generar un ID único para el evento

    // Enviar evento a Facebook si el estado es "approved"
    if (status === "approved") {
      fetch("/api/facebook-purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventID, amount, email }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Evento enviado a Facebook CAPI:", data))
        .catch((err) => console.error("Error en CAPI:", err));
    }
  }, []); // Se ejecuta solo una vez después de renderizar el componente

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800">¡Gracias por tu compra!</h1>
        <p className="mt-4 text-green-600">Tu pago ha sido aprobado.</p>
        <a
          href="https://drive.google.com/file/d/1YNj2W7DHYKnKkNZzVofxvTjm98OErtL9/view?usp=sharing"
          target="_blank"
  rel="noopener noreferrer"
          // Cambia la ruta al archivo PDF real
          className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-full transition hover:bg-blue-600"
          download
        >
          Descargar PDF
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
