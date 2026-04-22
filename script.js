window.addEventListener("DOMContentLoaded", () => {

    const gate = document.getElementById("ageGate");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    if (!gate || !yesBtn || !noBtn) return;

    const verified = localStorage.getItem("ageVerified");

    // 🔥 VISA ENDAST OM INTE VERIFIERAD
    if (verified !== "true") {
        gate.style.display = "flex";
    }

    yesBtn.onclick = () => {
        localStorage.setItem("ageVerified", "true");
        gate.style.display = "none";
    };

    noBtn.onclick = () => {
        window.location.href = "exit.html";
    };
});