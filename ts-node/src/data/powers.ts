// Interfaz exportada para definir la estructura de cada poder
export interface Power {
  id: number;
  desc: string;
}

// Arreglo de objetos que cumple con la interfaz `Power`
const powers: Power[] = [
  {
    id: 1,
    desc: "poder",
  },
  {
    id: 2,
    desc: "shoot",
  },
];

// Exportación por defecto.
// Esto permite importar este arreglo con cualquier nombre.
export default powers;
