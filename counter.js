document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let start = parseInt(counter.getAttribute("data-start")) || 0;
        const end = parseInt(counter.getAttribute("data-end")) || 100;
        const speed = parseFloat(counter.getAttribute("data-speed")) || 0.1;
        let current = start;
        const increment = (end - start) * speed * 0.05;

        const step = () => {
            current += increment;
            if (current >= end) {
                counter.textContent = end;
                return;
            }
            counter.textContent = Math.floor(current);
            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    });
});