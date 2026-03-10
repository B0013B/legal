const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".video-close");

document.querySelectorAll(".video-click").forEach(btn => {

  btn.addEventListener("click", function () {

    const iframe = this.parentElement.querySelector("iframe");

    const src = iframe.src + "?autoplay=1";

    modalVideo.src = src;

    modal.style.display = "flex";

  });

});

closeBtn.addEventListener("click", function () {

  modal.style.display = "none";
  modalVideo.src = "";

});
