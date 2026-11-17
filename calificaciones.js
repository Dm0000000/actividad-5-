document.addEventListener("DOMContentLoaded", function () {
    const btnCalcular = document.getElementById("btnCalcular");

    btnCalcular.addEventListener("click", function () {
        // Obtener valores
        const nombre = document.getElementById("nombre").value.trim();
        const cal1Str = document.getElementById("cal1").value.trim();
        const cal2Str = document.getElementById("cal2").value.trim();
        const cal3Str = document.getElementById("cal3").value.trim();

        // A. Validación de información
        if (nombre === "") {
            alert("Por favor, ingresa el nombre del estudiante.");
            return;
        }

        if (cal1Str === "" || cal2Str === "" || cal3Str === "") {
            alert("Por favor, ingresa las tres calificaciones.");
            return;
        }

        const cal1 = parseFloat(cal1Str);
        const cal2 = parseFloat(cal2Str);
        const cal3 = parseFloat(cal3Str);

        if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
            alert("Las calificaciones deben ser números válidos.");
            return;
        }

        if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
            alert("Ninguna calificación puede ser menor que 0 ni mayor que 10.");
            return;
        }

        // B. Calcular el promedio
        const promedio = (cal1 + cal2 + cal3) / 3;
        const promedioFormateado = promedio.toFixed(2);

        // C. Determinar el resultado (APROBADO / REPROBADO)
        let estado = "";
        let claseCaja = "";
        let claseTexto = "";

        if (promedio >= 6 && promedio <= 10) {
            estado = "APROBADO";
            claseCaja = "aprobado";
            claseTexto = "texto-aprobado";
        } else {
            estado = "REPROBADO";
            claseCaja = "reprobado";
            claseTexto = "texto-reprobado";
        }

        // D. Mostrar una observación
        let observacion = "";

        if (promedio >= 9 && promedio <= 10) {
            observacion = "Excelente desempeño";
        } else if (promedio >= 8 && promedio < 9) {
            observacion = "Muy buen desempeño";
        } else if (promedio >= 7 && promedio < 8) {
            observacion = "Buen desempeño";
        } else if (promedio >= 6 && promedio < 7) {
            observacion = "Desempeño suficiente";
        } else {
            observacion = "Necesita mejorar";
        }

        // 4. Presentar los resultados en la página
        const contenedorResultados = document.getElementById("resultados");

        contenedorResultados.className = "caja-resultados " + claseCaja;
        contenedorResultados.style.display = "block";

        contenedorResultados.innerHTML = `
            <p><strong>Nombre del estudiante:</strong> ${nombre}</p>
            <p><strong>Calificaciones:</strong> ${cal1}, ${cal2}, ${cal3}</p>
            <p><strong>Promedio obtenido:</strong> ${promedioFormateado}</p>
            <p><strong>Estado:</strong> <span class="${claseTexto}">${estado}</span></p>
            <p><strong>Observación:</strong> ${observacion}</p>
        `;
    });
});
