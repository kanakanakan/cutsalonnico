document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.question__btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.nextElementSibling;
            content.classList.toggle("active");

            const arrow = this.querySelector('.question__arrow');
            arrow.classList.toggle("active");
        });
    });
});