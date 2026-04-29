document.addEventListener("DOMContentLoaded", () => {

    // AGE GATE
    const gate = document.getElementById("ageGate");

    if (gate) {
        const isVerified = sessionStorage.getItem("ageVerified");

        if (isVerified === "true") {
            gate.style.display = "none";
        }

        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");

        if (yesBtn) {
            yesBtn.addEventListener("click", () => {
                sessionStorage.setItem("ageVerified", "true");
                gate.style.display = "none";
            });
        }

        if (noBtn) {
            noBtn.addEventListener("click", () => {
                window.location.href = "exit.html";
            });
        }
    }

    // HAMBURGER
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector(".nav-right");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });
    }

    // JOIN MODAL
    const openBtn = document.getElementById("openJoinForm");
    const modal = document.getElementById("joinModal");
    const closeBtn = document.getElementById("closeJoinForm");

    if (openBtn && modal) {
        openBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

});