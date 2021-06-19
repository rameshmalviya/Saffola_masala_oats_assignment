$(function () {
    init();
});

function init() {
    btnWaveEffect();
    myOwlCarousel();
    topMenuScrollbar();
    aosAnimation();
    scrolltoTop();
    navbarMenuToggleBtn();
}

function btnWaveEffect() {
    var buttons = document.body.getElementsByClassName("btn");

    Array.prototype.forEach.call(buttons, function (btn) {
        btn.addEventListener('click', createRipple);
    });

    function createRipple(e) {
        var children = this.getElementsByClassName('wave-ripple');
        while (children.length > 0) {
            children[0].parentNode.removeChild(children[0]);
        };

        var circle = document.createElement('div');
        circle.style["position"] = 'absolute';
        this.appendChild(circle);

        var d = Math.max(this.clientWidth, this.clientHeight);
        var eRect = this.getBoundingClientRect()

        circle.style.width = circle.style.height = d + 'px';
        circle.style.left = e.clientX - eRect.left - d / 2 + 'px';
        circle.style.top = e.clientY - eRect.top - d / 2 + 'px';
        circle.classList.add('wave-ripple');
    }
}

function myOwlCarousel() {

    $('.carousel-main').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        },
        navText: ['<img src="./svg/left.svg" />', '<img src="./svg/right.svg" />'],
    });

    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        },
        navText: ['<img src="./svg/left.svg" />', '<img src="./svg/right.svg" />'],
    });
    $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 3
            }
        },
        navText: ['<img src="./svg/left.svg" />', '<img src="./svg/right.svg" />'],
    });
    $('.owl-carousel-3').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        },
        navText: ['<img src="./svg/left.svg" />', '<img src="./svg/right.svg" />'],
    });

    $('.owl-footer-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        navText: ['<img src="./svg/left-icon-footer-slider.svg" class="owl-left-3030" />', '<img src="./svg/right-icon-footer-slider.svg" class="owl-right-3030" />'],
    });
}

function topMenuScrollbar() {
    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
}



function aosAnimation() {
    AOS.init();
}

function scrolltoTop() {
    var toTop = $('.to-top');
    toTop.on('click', function () {
        $('html, body').animate({
            scrollTop: $('html, body').offset().top,
        });
    });
}


function navbarMenuToggleBtn() {
    var close = 'svg/close.svg';
    var menuLine = 'svg/hamburger_icon.svg';

    $('#toggleMenu').click(function (e) {
        if ($('.toogleMenuSvgIcon').attr('src') === close) {
            $('.toogleMenuSvgIcon').attr('src', menuLine);
        } else {
            $('.toogleMenuSvgIcon').attr('src', close)
        }
        $('.menu-h-full-screen-reponsive').toggleClass("full-screen-collapsed-11020"); //you can list several class names 
        e.preventDefault();
    })
}