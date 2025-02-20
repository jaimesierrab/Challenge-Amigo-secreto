document.addEventListener("DOMContentLoaded", function () {
    // Capturar los elementos del DOM necesarios
    const inputNombre = document.getElementById("nombre"); // Campo de entrada para el nombre
    const btnAdicionar = document.getElementById("adicionar"); // Botón para agregar nombres
    const btnSortear = document.getElementById("sortear"); // Botón para realizar el sorteo
    const resultado = document.getElementById("resultado"); // Elemento para mostrar el resultado del sorteo
    
    let nombres = []; // Lista para almacenar los nombres válidos

    // Evento para adicionar nombres a la lista
    btnAdicionar.addEventListener("click", function () {
        const nombre = inputNombre.value.trim(); // Obtener el nombre y eliminar espacios innecesarios
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido."); // Validar que no esté vacío
            return;
        }
        nombres.push(nombre); // Agregar el nombre a la lista
        inputNombre.value = ""; // Limpiar el campo de entrada
    });

    // Evento para sortear un nombre de la lista
    btnSortear.addEventListener("click", function () {
        if (nombres.length === 0) {
            alert("La lista está vacía. Agrega al menos un nombre."); // Verificar que haya nombres en la lista
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length); // Seleccionar un índice aleatorio
        resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`; // Mostrar el nombre seleccionado
    });
});

