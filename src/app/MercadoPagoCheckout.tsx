import React, { useEffect } from "react";

const MercadoPagoCheckout: React.FC = () => {
  useEffect(() => {
    const loadMercadoPagoScript = () => {
      console.log("Iniciando carga del script de Mercado Pago...");
      
      if (typeof window !== "undefined" && !window.MercadoPago) {
        console.log("Mercado Pago no está presente, creando el script...");
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;
        script.onload = () => {
          console.log("Mercado Pago script loaded");
          initializeMercadoPago();
        };
        script.onerror = (error) => {
          console.error("Error al cargar el script de Mercado Pago:", error);
        };
        document.body.appendChild(script);
      } else {
        console.log("Mercado Pago ya está presente en el window.");
        initializeMercadoPago();
      }
    };

    const initializeMercadoPago = () => {
      console.log("Inicializando Mercado Pago...");
      
      if (typeof window !== "undefined" && window.MercadoPago) {
        console.log("Mercado Pago está disponible.");
        const mp = new window.MercadoPago("APP_USR-f3926607-8136-497d-88bb-5af2cf2a65fb"); // Usa tu Public Key

        const preference = {
          items: [
            {
              title: "Curso de Inglés",
              unit_price: 50000, // Monto en pesos
              quantity: 1,
            },
          ],
          back_urls: {
            success: "https://ecliczacademy.vercel.app/success",
            failure: "https://ecliczacademy.vercel.app/failure",
            pending: "https://ecliczacademy.vercel.app/pending",
          },
          auto_return: "approved",
        };

        console.log("Configurando el checkout...");
        
        mp.checkout({
          preference,
          autoOpen: true, // Abre el checkout automáticamente
          render: {
            container: "#mp-button-container", // Contenedor para el botón
            label: "Pagar con Mercado Pago",
          },
        });

        console.log("Checkout de Mercado Pago configurado.");
      } else {
        console.error("Mercado Pago no está disponible en el objeto window.");
      }
    };

    loadMercadoPagoScript();
  }, []);

  return <div id="mp-button-container"></div>;
};

export default MercadoPagoCheckout;
