$(document).ready(function() {
    $('.content-print__blocks-slaider').slick({


        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});





// let position = 0;
// const slider = document.querySelector('content-print__blocks-slaider');
// const line = document.querySelector('slaider-line');
// const items = document.querySelectorAll('conetent-print__slaider-item');
// const btnLeft = document.querySelector('conetent-print__slaider-btn-left');
// const btnRight = document.querySelector('conetent-print__slaider-btn-right');

// const SetListener = (element, type, handler) => {
//     if (!element) {
//         return;
//     }
//     element.addEventListener(type, handler);
//     return () => {
//         element.removeEventListener(type, handler);
//     };
// }

// SetListener(btnRight, 'click', () => {
//     position += 170;
//     line.style.left = position + 'px';
// });

// let position = 0;
// const sliderToShow = 5;
// const sliderToScroll = 1;
// const slider = document.querySelector('content-print__blocks-slaider');
// const line = document.querySelector('slaider-line');
// const items = document.querySelectorAll('conetent-print__slaider-item');
// const btnLeft = document.querySelector('conetent-print__slaider-btn-left');
// const btnRight = document.querySelector('conetent-print__slaider-btn-right');
// const itemsCount = items.length;
// const itemWidth = slider.clientWidth / sliderToShow;
// const movePosition = sliderToScroll * itemWidth;

// items.forEach((item) => {
//     item.style.minWidth = '$(itemWidth)px';
// });

// btnRight.addEventListener('click', () => {
//     const itemLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
//     position -= itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth;
//     setPosition();
//     checkBtns();
// });

// btnLeft.addEventListener('click', () => {
//     const itemLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
//     position += itemLeft <= sliderToScroll ? movePosition : itemLeft * itemWidth;
//     setPosition();
//     checkBtns();
// });

// const setPosition = () => {
//     line.style.transform = 'translateX(&{position}px)';
// };

// const checkBtns = () => {
//     btnLeft.disabled = position === 0;
//     btnRight.disabled = position <= -(itemsCount - sliderToShow) * itemWidth;
// };

// checkBtns();