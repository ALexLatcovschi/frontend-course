function toggleMenu(show) {
    const activeMenu = document.querySelectorAll('.hamburger-menu');

    if (activeMenu.length) {
        if (show) {
            activeMenu[0]?.classList.add('open');
            document.body.style.overflowY = 'hidden';
            document.querySelectorAll('header')[0].style.minHeight = '100vh';
        } else {
            activeMenu[0]?.classList.remove('open');
            document.body.style.overflowY = 'auto';
            document.querySelectorAll('header')[0].style.minHeight = 'initial';
        }
    }
}