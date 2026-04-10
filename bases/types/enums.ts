(() => {
  // Un enum permite definir un conjunto de valores constantes
  // con nombres más descriptivos.
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  // `currentAudio` solo puede tomar valores del enum `AudioLevel`
  let currentAudio: AudioLevel = AudioLevel.max;

  // Imprime el valor numérico asociado a `AudioLevel.max`
  console.log(currentAudio); // 10

  // Imprime todo el enum
  console.log(AudioLevel);
})();
