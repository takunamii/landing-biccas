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
