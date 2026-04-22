window.onload = function () {

    const gate = document.getElementById("ageGate");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    console.log("LOADED:", gate, yesBtn, noBtn);

    if (!gate || !yesBtn || !noBtn) return;

    yesBtn.onclick = function () {
        localStorage.setItem("ageVerified", "true");
        gate.style.display = "none";
    };

    noBtn.onclick = function () {
        window.location.href = "exit.html";
    };

};