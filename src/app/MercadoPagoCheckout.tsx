import React, { useEffect } from "react";

const MercadoPagoCheckout: React.FC = () => {
  useEffect(() => {
    const loadMercadoPagoScript = () => {
      if (typeof window !== "undefined" && !window.MercadoPago) {
        const script = document.createElement("script");
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.async = true;
        script.onload = () => {
          initializeMercadoPago();
        };
        document.body.appendChild(script);
      } else {
        initializeMercadoPago();
      }
    };

    const initializeMercadoPago = () => {
      if (typeof window !== "undefined" && window.MercadoPago) {
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

        mp.checkout({
          preference,
          autoOpen: true, // Abre el checkout automáticamente
          render: {
            container: "#mp-button-container", // Contenedor para el botón
            label: "Pagar con Mercado Pago",
          },
        });
      }
    };

    loadMercadoPagoScript();
  }, []);

  return <div id="mp-button-container"></div>;
};

export default MercadoPagoCheckout;
