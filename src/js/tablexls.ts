export function initializeExpandableTable() {
    const toggleAllButton = document.getElementById("toggleAll");
    const toggleButtons = document.querySelectorAll(".toggle-row");

    if (toggleAllButton) {
        toggleAllButton.addEventListener("click", function (this: HTMLElement) {
            const isExpanded = this.getAttribute("data-expanded") === "true";
            this.setAttribute("data-expanded", (!isExpanded).toString());
            document.querySelectorAll(".detail-row").forEach(row => {
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

// 🔹 **Ejecuta automáticamente cuando el script se carga**
initializeExpandableTable();
