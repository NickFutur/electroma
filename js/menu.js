// Меню гамбургер
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")
    // const body = document.body;
    // Попытка сделать фиксированный блок header
    // let disableScroll = function() {
    //     let pagePosition = window.scrollY;
    //     document.body.classList.add('disable-scroll');
    //     document.body.dataset.position = pagePosition;
    //     document.body.style.top = -pagePosition + 'px';
    // }

// let enableScroll = function() {
//     let pagePosition = parseInt(document.body.dataset.position, 10);
//     document.body.style.top = 'auto';
//     document.body.classList.remove('disable-scroll');
//     window.scroll({ top: pagePosition, left: 0 });
//     document.body.removeAttribute('data-position');
// }

hamburger.addEventListener("click", () => {
    //  disableScroll();
    //   e.currentTarget.style.pointerEvents = 'none';
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".mobile-nav-link").forEach(n => n.addEventListener("click", () => {
    // enableScroll();
    // e.currentTarget.style.pointerEvents = 'none';
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Проблема с фиксацией блока бокового меню
window.onscroll = function showHeaderTop() {
    var header = document.querySelector('.side-menu');
    if (window.pageYOffset > 100) {
        // document.sideMenu.classList.remove('.side-menu')
        sideMenu.classList.add('.side-menu-change')

    } else {
        // document.sideMenu.classList.remove('.side-menu-change')
        sideMenu.classList.add('.side-menu')
    }
}