"use strict";
// ======================================
// 📌 VESTA UI - Menú Lateral con Fijación y Modo Compacto
// ======================================
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".toggle-menu");
    const menuFixedToggle = document.querySelector(".toggle-fixed");
    const content = document.querySelector(".content");
    let isFixed = false;
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("expanded");
            content.classList.toggle("shifted");
        });
    }
    if (menuFixedToggle && sidebar) {
        menuFixedToggle.addEventListener("click", () => {
            isFixed = !isFixed;
            if (isFixed) {
                sidebar.classList.add("expanded");
            }
            else {
                sidebar.classList.remove("expanded");
            }
        });
    }
});
