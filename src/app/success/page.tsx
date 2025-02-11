"use client";

import React, { useState } from "react";

const SuccessPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const eventID = Date.now().toString(); // ID único
    const amount = "37787"; // Valor fijo en COP

    try {
      const response = await fetch("/api/facebook-purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventID, amount, email }),
      });

      if (!response.ok) throw new Error("Error al enviar la conversión");

      setIsSubmitted(true); // Habilita el botón de descarga
    } catch (err) {
      setError("Hubo un problema. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800">¡Gracias por tu compra!</h1>
        <p className="mt-4 text-green-600">Tu pago ha sido aprobado.</p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Ingresa tu correo electrónico:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="tuemail@example.com"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-full transition hover:bg-blue-600 w-full"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Confirmar y desbloquear descarga"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        ) : (
          <a
            href="https://drive.google.com/file/d/10VZcn5XWhAxSPKJbaG17cGSt9MIG2dMF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-green-500 text-white font-semibold py-2 px-6 rounded-full transition hover:bg-green-600"
            download
          >
            Descargar PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default SuccessPage;
