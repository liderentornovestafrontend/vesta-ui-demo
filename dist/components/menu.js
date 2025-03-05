import $ from "jquery";
/**
 * Inicializa el menú lateral con fijación y modo compacto.
 * @param {JQuery<HTMLElement>} [container] - Elemento contenedor donde buscar el menú (por defecto, `document.body`).
 */
export function initializeSidebarMenu(container) {
    const $container = container !== null && container !== void 0 ? container : $("body");
    const sidebar = $container.find(".sidebar");
    const menuToggle = $container.find(".toggle-menu");
    const menuFixedToggle = $container.find(".toggle-fixed");
    const content = $container.find(".content");
    let isFixed = false;
    // Alternar menú lateral
    menuToggle.on("click", function () {
        sidebar.toggleClass("expanded");
        content.toggleClass("shifted");
    });
    // Fijar menú lateral
    menuFixedToggle.on("click", function () {
        isFixed = !isFixed;
        sidebar.toggleClass("expanded", isFixed);
    });
}
