(() => {
  // Tipo para definir la estructura del objeto `avengers`
  type Avengers = {
    nick: string;
    iroman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  // Objeto que cumple con la estructura del tipo `Avengers`
  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    iroman: "Rober Downey Jr",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  // Desestructuración normal de objetos:
  // extraemos propiedades específicas del objeto
  // const { poder, vision } = avengers;
  // console.log(poder.toFixed(2), vision.toUpperCase());

  // Si no tipamos el parámetro, TypeScript puede inferirlo,
  // pero en muchos casos conviene especificar el tipo claramente.
  // const printAvengers = (avengers) => {
  //   console.log(avengers.vision);
  // };

  // Esto funciona, pero no es lo más limpio,
  // porque estamos escribiendo toda la estructura del objeto directamente.
  // Es mejor reutilizar un `type` o una `interface`.
  // const printAvengers = (avengers: {
  //   nick: string;
  //   iroman: string;
  //   vision: string;
  //   activo: boolean;
  //   poder: number;
  // }) => {
  //   console.log(avengers.vision);
  // };

  // Esta es una mejor forma:
  // tipamos el parámetro con `Avengers`
  // y además desestructuramos directamente sus propiedades.
  const printAvengers = ({ vision, ...resto }: Avengers) => {
    // `vision` se extrae directamente
    // `resto` contiene las demás propiedades del objeto
    console.log(vision, resto);
  };

  printAvengers(avengers);

  // Desestructuración de arreglos
  const avengersArr: [string, boolean, number] = ["Cap. America", true, 117];

  // Aquí ignoramos la primera posición
  // y extraemos la segunda y tercera
  const [, ironman, serieNum] = avengersArr;

  console.log(ironman);
})();
