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




document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openJoinForm");
    const closeBtn = document.getElementById("closeJoinForm");
    const modal = document.getElementById("joinModal");

    if (!openBtn || !closeBtn || !modal) return;

    // OPEN
    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // CLOSE
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // click outside box = close
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openJoinForm");
    const closeBtn = document.getElementById("closeJoinForm");
    const modal = document.getElementById("joinModal");

    if (!openBtn || !closeBtn || !modal) return;

    // öppna
    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // stäng
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // klick utanför box
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});