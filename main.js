// Función principal del juego de trivia
function juegoTriviaArgentina() {
    let puntaje = 0;
  
    console.log("¡Bienvenido al juego de trivia sobre la Argentina y su selección de fútbol!");
  
    // Pregunta 1
    const respuesta1 = prompt("Pregunta 1: ¿En qué año ganó Argentina su primera Copa del Mundo?\nA) 1978\nB) 1986\nC) 1990");
    if (respuesta1.toLowerCase() === "b") {
      puntaje++;
    }
  
    // Pregunta 2
    const respuesta2 = prompt("Pregunta 2: ¿Quién es el máximo goleador de la selección argentina?\nA) Diego Maradona\nB) Lionel Messi\nC) Gabriel Batistuta");
    if (respuesta2.toLowerCase() === "b") {
      puntaje++;
    }
  
    // Pregunta 3
    const respuesta3 = prompt("Pregunta 3: ¿En qué estadio juega la selección argentina sus partidos de local?\nA) Estadio Monumental\nB) Estadio Centenario\nC) Estadio Maracaná");
    if (respuesta3.toLowerCase() === "a") {
      puntaje++;
    }
  
    // Pregunta 4
    const respuesta4 = prompt("Pregunta 4: ¿Cuántas Copas del Mundo ha ganado Argentina en total?\nA) 2\nB) 3\nC) 4");
    if (respuesta4.toLowerCase() === "b") {
      puntaje++;
    }
  
    // Pregunta 5
    const respuesta5 = prompt("Pregunta 5: ¿Quién fue el entrenador de la selección argentina en la Copa del Mundo 1986?\nA) César Luis Menotti\nB) Carlos Bilardo\nC) Alfio Basile");
    if (respuesta5.toLowerCase() === "b") {
      puntaje++;
    }
  
    // Pregunta 6
    const respuesta6 = prompt("Pregunta 6: ¿Qué jugador argentino ganó el Balón de Oro en 1978?\nA) Diego Maradona\nB) Mario Kempes\nC) Daniel Passarella");
    if (respuesta6.toLowerCase() === "b") {
      puntaje++;
    }
  
    // Pregunta 7
    const respuesta7 = prompt("Pregunta 7: ¿En qué país se celebró la Copa del Mundo 1978 en la que Argentina resultó campeona?\nA) España\nB) México\nC) Argentina");
    if (respuesta7.toLowerCase() === "c") {
      puntaje++;
    }
  
    // Pregunta 8
    const respuesta8 = prompt("Pregunta 8: ¿Cuál es el apodo de la selección argentina?\nA) Las Águilas\nB) Los Gauchos\nC) Los Leones");
    if (respuesta8.toLowerCase() === "b") {
      puntaje++;
    }
  
    // Pregunta 9
    const respuesta9 = prompt("Pregunta 9: ¿Quién fue el capitán de la selección argentina en la Copa del Mundo 2014?\nA) Javier Mascherano\nB) Lionel Messi\nC) Gonzalo Higuaín");
    if (respuesta9.toLowerCase() === "b") {
      puntaje++;
    }
  
    // Pregunta 10
    const respuesta10 = prompt("Pregunta 10: ¿En qué año Argentina ganó la Copa América por última vez antes de 2021?\nA) 1993\nB) 2004\nC) 1983");
    if (respuesta10.toLowerCase() === "a") {
      puntaje++;
    }
  
    // Mensaje de resultado en la consola
    if (puntaje === 10) {
      console.log(`¡Felicidades! Lograste un RECORD perfecto de 10 aciertos.`);
    } else {
      console.log(`Fin del juego. Tu puntaje final es: ${puntaje} aciertos.`);
    }
  }
  

  juegoTriviaArgentina();
  