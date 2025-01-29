document.addEventListener("DOMContentLoaded", () => {
    const details = document.querySelectorAll("details");
    const summaryElements = document.querySelectorAll("summary");

    details.forEach((detail, index) => {
        const summary = detail.querySelector("summary");

        // Remove the manually set `+`/`-` content
        summary.style.removeProperty("content");

        summary.addEventListener("click", function(event) {
            event.preventDefault();

            // Auto-close other details elements
            details.forEach(item => {
                if (item !== detail) {
                    item.removeAttribute("open");
                }
            });

            // Toggle current item
            if (detail.hasAttribute("open")) {
                detail.removeAttribute("open");
            } else {
                detail.setAttribute("open", true);
            }
        });

        // Keyboard navigation
        summary.addEventListener("keydown", function(event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                summary.click();
            } else if (event.key === "ArrowDown") {
                event.preventDefault();
                const nextIndex = (index + 1) % summaryElements.length;
                summaryElements[nextIndex].focus();
                summaryElements[nextIndex].scrollIntoView({ behavior: "smooth", block: "center" });
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                const prevIndex = (index - 1 + summaryElements.length) % summaryElements.length;
                summaryElements[prevIndex].focus();
                summaryElements[prevIndex].scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
});
