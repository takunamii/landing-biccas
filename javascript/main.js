const buttonMonthly = document.querySelector('.period-monthly');
const buttonYearly = document.querySelector('.period-yearly');

buttonMonthly.addEventListener('click', () => {
    buttonMonthly.classList.add('active');
    buttonYearly.classList.remove('active');
})

buttonYearly.addEventListener('click', () => {
    buttonYearly.classList.add('active');
    buttonMonthly.classList.remove('active');
})

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

burger.addEventListener('click', () => {
    toggleMenu(!document.body.classList.contains('menu-open'));
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
        toggleMenu(false);
        burger.focus();
    }
});
