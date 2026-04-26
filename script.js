document.addEventListener("DOMContentLoaded", () => {

    const gate = document.getElementById("ageGate");

    if (!gate) return;

    // 🔥 Kolla session (EN gång per session)
    const isVerified = sessionStorage.getItem("ageVerified");

    if (isVerified === "true") {
        gate.style.display = "none";
        return;
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

});

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-right");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});






