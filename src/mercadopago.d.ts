interface Preference {
    items: {
        title: string;
        unit_price: number;
        quantity: number;
    }[];
    back_urls: {
        success: string;
        failure: string;
        pending: string;
    };
    auto_return: string;
}

interface MercadoPago {
    new(publicKey: string): MercadoPagoInstance; // MercadoPago debe ser una función constructora que toma una clave pública y retorna una instancia
}

interface MercadoPagoInstance {
    // Define los métodos y propiedades que necesitas usar de la instancia de MercadoPago
    init: () => void;
    checkout: (data: { preference: Preference; autoOpen: boolean; render: { container: string; label: string } }) => void;
}

interface Window {
    MercadoPago: MercadoPago; // MercadoPago ahora es un constructor
}
