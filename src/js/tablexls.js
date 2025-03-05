export function initializeExpandableTable() {
    const toggleAllButton = document.getElementById("toggleAll");
    const toggleButtons = document.querySelectorAll(".toggle-row");
    if (toggleAllButton) {
        toggleAllButton.addEventListener("click", function () {
            const isExpanded = this.getAttribute("data-expanded") === "true";
            this.setAttribute("data-expanded", (!isExpanded).toString());
            document.querySelectorAll(".detail-row").forEach(row => {
                row.style.display = isExpanded ? "none" : "table-row";
            });
        });
    }
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            var _a;
            const detailRow = (_a = this.closest("tr")) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
            if (detailRow) {
                detailRow.style.display = detailRow.style.display === "table-row" ? "none" : "table-row";
            }
        });
    });
}
// 🔹 **Ejecuta automáticamente cuando el script se carga**
initializeExpandableTable();
