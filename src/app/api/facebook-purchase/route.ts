// app/api/facebook-purchase/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Función principal para manejar la solicitud POST
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { eventID, amount, email } = body; // Obtener datos del cuerpo de la solicitud

        const accessToken = "EAAGrIO8kJ9IBO2bvHLeMyx1RSOQAwQsjwk5T2ZBunQk4VxnpPO7ZCIAQdbW5Tr5Do5YHc5PxNZCoUXZCtTjElOMqinLwzB7acDCj9SrNL11HQ0Pe6U1NZC2zNSD1JUokUZBMW2UzFeZAMA4n60Ih6klFGxu9U9xh3N9ilZAHnDaP3i8XThb9cOG807eC96VEKsIcawZDZD";
        const pixelID = "951295253720594"; // ID del píxel de Facebook

        // Hacer la solicitud POST a Facebook
        const response = await fetch(
            `https://graph.facebook.com/v18.0/${pixelID}/events?access_token=${accessToken}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: [
                        {
                            event_name: "Purchase", // Nombre del evento
                            event_time: Math.floor(Date.now() / 1000), // Tiempo en formato Unix
                            event_source_url: "https://ecliczacademy.vercel.app/success", // URL de la conversión
                            action_source: "website",
                            event_id: eventID, // ID único para evitar duplicados
                            user_data: {
                                em: email ? [hashEmail(email)] : [], // Hashear el email por privacidad
                            },
                            custom_data: {
                                value: amount,
                                currency: "USD", // Establecer la moneda
                            },
                        },
                    ],
                    test_event_code: "TEST6624", // Código de prueba para desarrollo
                }),
            }
        );

        const result = await response.json(); // Obtener la respuesta de Facebook
        return NextResponse.json(result); // Devolver la respuesta a Next.js
    } catch (error) {
        console.error("Error enviando evento a Facebook:", error);
        return NextResponse.json({ error: "Error interno" }, { status: 500 });
    }
}

// Función para hashear el email antes de enviarlo a Facebook
function hashEmail(email: string) {
    return crypto.createHash("sha256").update(email.trim().toLowerCase()).digest("hex");
}
