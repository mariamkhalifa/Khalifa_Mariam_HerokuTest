(() => {
    // console.log('fired');

    let burgerMenu = document.querySelector('.burger'),
        nav = document.querySelector('.nav');

    function expandBurgerMenu() {
        burgerMenu.classList.toggle('rotated');
        nav.classList.toggle('visible');
    }

    burgerMenu.addEventListener('click', expandBurgerMenu);

})();