document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    const radios = document.querySelectorAll('input[name="energia"]');
    const cards = document.querySelectorAll('.destino-card');
    const placeholder = document.querySelector('.destino-placeholder');

    function ocultarCards() {
        cards.forEach(card => {
            card.style.display = "none";
        });
    }

    radios.forEach(radio => {
        radio.addEventListener("change", function () {

            ocultarCards();

            if (placeholder) {
                placeholder.style.display = "none";
            }

            const selectedCard = document.querySelector(`.destino-card.${this.id}`);

            if (selectedCard) {
                selectedCard.style.display = "block";
            }
        });
    });

 
    const audio = document.getElementById("energiaAudio");
    const despertarBtn = document.querySelector(".despertar-btn");
    const revelarBtn = document.querySelector(".revelar-btn");

    if (!audio) return;

    audio.volume = 0.3;
    audio.loop = true;

    if (despertarBtn) {
        despertarBtn.addEventListener("click", () => {
            audio.play().catch(() => {
            });
        });
    }

    if (revelarBtn) {
        revelarBtn.addEventListener("click", () => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

});