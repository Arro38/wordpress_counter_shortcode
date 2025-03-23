document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    // Fonction d'animation du compteur
    const animateCounter = (counter) => {
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
    };

    // Utilisation de l'Intersection Observer pour détecter si l'élément est visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Stopper l'observation après animation
            }
        });
    }, { threshold: 0.5 }); // Lancer quand 50% de l'élément est visible

    // Observer tous les compteurs
    counters.forEach(counter => {
        observer.observe(counter);
    });
});