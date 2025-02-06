interface MercadoPago {
    new(publicKey: string): MercadoPagoInstance; // MercadoPago debe ser una función constructora que toma una clave pública y retorna una instancia
}

interface MercadoPagoInstance {
    // Define los métodos y propiedades que necesitas usar de la instancia de MercadoPago
    init: () => void;
    checkout: (data: any) => void;
}

interface Window {
    MercadoPago: MercadoPago; // MercadoPago ahora es un constructor
}
