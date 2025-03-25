document.addEventListener('DOMContentLoaded', function () {
    const hamBtn = document.querySelector('.ham__btn');
    const ham = document.querySelector('.ham');
    const links = document.querySelectorAll('.ham__link[href="#contact"], .ham__link[href="#access"], .ham__link[href="#allinfo"],.ham__link[href = "#instagram"]');

    hamBtn.addEventListener('click', function () {
        const isOpen = ham.classList.toggle('ham--isOpen');
        hamBtn.classList.toggle('close', isOpen);
    });

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // ページ遷移を遅らせてメニューを閉じる
            event.preventDefault();
            ham.classList.remove('ham--isOpen');
            hamBtn.classList.remove('close');
            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // 0.3秒後にページ遷移
        });
    });
});
