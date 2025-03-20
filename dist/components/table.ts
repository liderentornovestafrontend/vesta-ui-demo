import $ from "jquery";

/**
 * Inicializa la tabla expandible con jQuery.
 * @param {JQuery<HTMLElement>} container - Elemento contenedor donde buscar la tabla.
 */
export function initializeExpandableTable(container: HTMLElement | Document = document) {
    const toggleAllButton = container.querySelector("#toggleAll");
    const toggleButtons = container.querySelectorAll(".toggle-row");

    if (toggleAllButton) {
        toggleAllButton.addEventListener("click", function (this: HTMLElement) {
            const isExpanded = this.getAttribute("data-expanded") === "true";
            this.setAttribute("data-expanded", (!isExpanded).toString());
            container.querySelectorAll(".detail-row").forEach(row => {
                (row as HTMLElement).style.display = isExpanded ? "none" : "table-row";
            });
        });
    }

    toggleButtons.forEach(button => {
        button.addEventListener("click", function (this: HTMLElement) {
            const detailRow = this.closest("tr")?.nextElementSibling as HTMLElement;
            if (detailRow) {
                detailRow.style.display = detailRow.style.display === "table-row" ? "none" : "table-row";
            }
        });
    });
}
