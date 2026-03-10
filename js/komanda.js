
function openModal(event, modalId) {
  event.preventDefault();
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Закриття при кліку поза вікном
window.onclick = function (event) {
  let modalVictor = document.getElementById("contactModalVictor");
  let modalVolodymir = document.getElementById("contactModalVolodymir");
  let modalDmitro = document.getElementById("contactModalDmitro");
  let modalOleksiy = document.getElementById("contactModalOleksiy");
  let modalYaroslav = document.getElementById("contactModalYaroslav");
  let modalMaksim = document.getElementById("contactModalMaksim");
  let modalDiana = document.getElementById("contactModalDiana");
  let modalNatalia = document.getElementById("contactModalNatalia");
  let modalElena = document.getElementById("contactModalElena");
  


  if (event.target === modalVictor) {
    modalVictor.style.display = "none";
  }
  if (event.target === modalVolodymir) {
    modalVolodymir.style.display = "none";
  }
  if (event.target === modalDmitro) {
    modalDmitro.style.display = "none";
  }
  if (event.target === modalOleksiy) {
    modalOleksiy.style.display = "none";
  }
  if (event.target === modalYaroslav) {
    modalYaroslav.style.display = "none";
  }
  if (event.target === modalMaksim) {
    modalMaksim.style.display = "none";
  }
  if (event.target === modalDiana) {
    modalDiana.style.display = "none";
  }
  if (event.target === modalNatalia) {
    modalNatalia.style.display = "none";
  }
  if (event.target === modalElena) {
    modalElena.style.display = "none";
  }
  
}