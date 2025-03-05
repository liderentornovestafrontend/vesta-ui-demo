"use strict";
$(document).ready(() => {
    console.log("🔹 Vesta UI está listo para usarse");
    // Manejo de eventos para botones
    $('.btn').on('click', function () {
        alert(`Hiciste clic en: ${$(this).text()}`);
    });
});
