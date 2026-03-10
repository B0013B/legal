
const video = document.getElementById("introVideo");
const videoIntro = document.getElementById("video-intro");

// Спроба запустити відео вручну після завантаження сторінки
window.addEventListener("load", () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Автозапуск спрацював
            })
            .catch((error) => {
                console.warn("Автоплей заблоковано:", error);
            });
    }
});

video.addEventListener("ended", () => {
    videoIntro.classList.add("fade-out");
    setTimeout(() => {
        videoIntro.style.display = "none";
    }, 1000);
});

