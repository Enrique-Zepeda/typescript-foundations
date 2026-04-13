(() => {
  // La interfaz principal define la estructura del cliente.
  // Cuando una propiedad interna ya tiene varias propiedades,
  // conviene crear otra interfaz aparte en lugar de anidarla directamente.
  interface Client {
    name: string;
    age?: number;
    address: Address;

    // La función recibe un string y retorna un string
    getFullAddress(id: string): string;
  }

  // Esta interfaz describe la estructura de la dirección
  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Kike",
    age: 23,
    address: {
      id: 125,
      zip: "ASDDF WWSA",
      city: "GDL",
    },

    // Aunque recibe `id`, en este ejemplo no se usa
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };

  const client2: Client = {
    name: "Zepeda",
    age: 24,
    address: {
      id: 117,
      zip: "3345234",
      city: "Japón",
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };

  console.log(client.getFullAddress("1"));
  console.log(client2.getFullAddress("2"));
})();
