document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav__item a');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetId === 'contact' || targetId === 'access' || targetId === 'instagram') {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});