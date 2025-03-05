// ======================================
// 📌 VESTA UI - Menú Lateral con Fijación y Modo Compacto
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    const menuToggle = document.querySelector(".toggle-menu") as HTMLButtonElement;
    const menuFixedToggle = document.querySelector(".toggle-fixed") as HTMLButtonElement;
    const content = document.querySelector(".content") as HTMLElement;

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
            } else {
                sidebar.classList.remove("expanded");
            }
        });
    }
});
