const images = document.querySelectorAll('.comandos__item img');

function checkScroll() {
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      image.classList.add('show-on-scroll');
    } else {
      image.classList.remove('show-on-scroll');
    }
  });
}

window.addEventListener('scroll', checkScroll);

checkScroll();
