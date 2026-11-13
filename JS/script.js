// 1. Evento para el botón Comprobar
document.getElementById("comprobar").addEventListener("click", function() {
    let puntaje = 0; // Se inicializa la variable en 0

    // Obtener las respuestas elegidas por el usuario
    let p1 = document.querySelector('input[name="p1"]:checked');
    let p2 = document.querySelector('input[name="p2"]:checked');
    let p3 = document.querySelector('input[name="p3"]:checked');
    let p4 = document.querySelector('input[name="p4"]:checked');
    let p5 = document.querySelector('input[name="p5"]:checked');

    // Validación: verificar que se hayan respondido las 5 preguntas
    if (!p1 || !p2 || !p3 || !p4 || !p5) {
        document.getElementById("resultado").innerHTML = "Debes responder las 5 preguntas antes de comprobar.";
        return;
    }

    // Comprobación de respuestas correctas según las fuentes del Santo
    if (p1.value === "b") puntaje++; // Nació en Milán
    if (p2.value === "a") puntaje++; // Colaboró con San José de Calasanz
    if (p3.value === "b") puntaje++; // Acompañar como "ángeles custodios"
    if (p4.value === "a") puntaje++; // Primer escolapio en profesar votos solemnes
    if (p5.value === "b") puntaje++; // Declarado Venerable por Pío XI

    // Generar el mensaje de resultado
    let mensaje = "<h3>Resultado: " + puntaje + "/5 puntos</h3>";

    if (puntaje === 5) {
        mensaje += "¡Felicitaciones! Has respondido correctamente todas las preguntas sobre el Venerable Glicerio Landriani.";
    } else if (puntaje >= 3) {
        mensaje += "¡Buen intento! Tienes un buen conocimiento sobre la historia del Santo.";
    } else {
        mensaje += "Te invitamos a repasar su historia e intentarlo nuevamente.";
    }

    // Mostrar en pantalla el resultado
    document.getElementById("resultado").innerHTML = mensaje;
});

// Evento para desmarcar las opciones al hacer clic en Reiniciar
document.getElementById("reiniciar").addEventListener("click", function() {
    let opciones = document.querySelectorAll('input[type="radio"]');
    
    for (let opcion of opciones) {
        opcion.checked = false;
    }
    
    document.getElementById("resultado").innerHTML = "";
});