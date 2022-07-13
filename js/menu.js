const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")
    // const body = document.body;

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

// Проблема с фиксацией блока
// window.onscroll = function showHeaderTop() {
//     var header = document.querySelector('.main-header-block');
//     if (window.pageYOffset > 100) {
//         header.classList.add('.fixed-header')
//              console.log(header)
//     } else {
//         header.classList.remove('.fixed-header')
//     }
// }