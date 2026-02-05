// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Defensive checks: if essential elements are missing, stop without throwing.
if (!envelope || !letter || !yesBtn || !noBtn) {
    console.warn('Essential DOM elements missing — interactive script disabled.');
} else {
    // Click Envelope
    envelope.addEventListener("click", () => {
        envelope.style.display = "none";
        letter.style.display = "flex";

        setTimeout(() => {
            const win = document.querySelector(".letter-window");
            if (win) win.classList.add("open");
        }, 50);
    });

    // Logic to make YES btn grow
    let yesScale = 1;

    yesBtn.style.position = "relative";
    yesBtn.style.transformOrigin = "center center";
    yesBtn.style.transition = "transform 0.3s ease";

    noBtn.addEventListener("click", () => {
        yesScale += 2;

        if (yesBtn.style.position !== "fixed") {
            yesBtn.style.position = "fixed";
            yesBtn.style.top = "50%";
            yesBtn.style.left = "50%";
            yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        } else {
            yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
        }
    });

    // YES is clicked
    yesBtn.addEventListener("click", () => {
        if (title) title.textContent = "I knew you would say yes😌";

        if (catImg) catImg.src = "Cane.png";

        const win = document.querySelector(".letter-window");
        if (win) win.classList.add("final");

        if (buttons) buttons.style.display = "none";
        if (finalText) finalText.style.display = "block";
    });
}