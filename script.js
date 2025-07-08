
const countdownDate = new Date("2025-08-27T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");
const giftCard = document.getElementById("gift-card");
const message = document.getElementById("message");

const music = document.getElementById("bg-music");

function showMessage() {
    giftCard.classList.add("hidden");
    message.classList.remove("hidden");
}

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        clearInterval(x);
        countdownElement.innerHTML = "🎁 It's time!";
        giftCard.classList.remove("hidden");
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);
