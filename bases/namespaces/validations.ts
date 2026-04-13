namespace Validations {
  // `export` permite que esta función pueda usarse
  // fuera del namespace `Validations`
  export const validateText = (text: string): boolean => {
    // Retorna `true` si el texto tiene más de 3 caracteres,
    // de lo contrario retorna `false`
    return text.length > 3 ? true : false;
  };

  // Función para validar si una fecha es válida
  export const validateDate = (myDate: Date): boolean => {
    // `valueOf()` obtiene el valor numérico de la fecha.
    // Si ese valor es `NaN`, la fecha no es válida.
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

// Llamamos a la función del namespace usando `Validations.nombreFuncion`
console.log(Validations.validateText("Fer"));
