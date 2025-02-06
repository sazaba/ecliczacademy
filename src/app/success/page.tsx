// app/success/page.tsx
"use client"; // Para que useEffect funcione correctamente

import React, { useEffect } from "react";

const SuccessPage: React.FC = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const amount = params.get("amount");
    const email = params.get("payer_email");
    const eventID = Date.now().toString();

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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800">¡Gracias por tu compra!</h1>
        <p className="mt-4 text-green-600">Tu pago ha sido aprobado.</p>
        <a
          href="/path/to/your/file.pdf"
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
