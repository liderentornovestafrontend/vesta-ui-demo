document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu a");
    const content = document.getElementById("content");

    function loadScript(src, callback) {
        if (!document.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement("script");
            script.src = src;
            script.onload = callback;
            document.body.appendChild(script);
        } else {
            callback(); // Si ya está cargado, ejecuta la función de inmediato
        }
    }

    function loadPage(page) {
        fetch(`docs/${page}.html`)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;

     
            })
            .catch(error => console.error("Error al cargar la página:", error));
    }

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = event.currentTarget.getAttribute("data-page");
            if (page) {
                loadPage(page);
                history.pushState({ page }, "", `#${page}`);
            }
        });
    });

    // Cargar una página por defecto si hay una en la URL
    const initialPage = window.location.hash.replace("#", "") || "menu-example";
    loadPage(initialPage);

    window.addEventListener("popstate", (event) => {
        if (event.state && event.state.page) {
            loadPage(event.state.page);
        }
    });
});
