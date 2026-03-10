
const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');
const menuList = document.querySelector('.menu__list'); // 

// Додаємо обробник для відкриття меню при натисканні на бургер
burger.addEventListener('click', (event) => {
    menu.classList.toggle('open');
    event.stopPropagation(); // Запобігає закриттю меню при натисканні на сам бургер
});

// Додаємо обробник для закриття меню при натисканні поза його межами
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        // Якщо клік поза меню і бургером, закрити меню
        menu.classList.remove('open');
    }
});
