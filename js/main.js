(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
  // Get button
const backToTop = document.getElementById('backToTop');

// Show button when scrolling down 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
};

// Scroll smoothly to top on click
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



})(jQuery);

// Cursor
// Cursor movement
const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', e => {
    // Move main orb
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Create trailing particles
    const dot = document.createElement('div');
    dot.style.position = 'fixed';
    dot.style.width = '8px';
    dot.style.height = '8px';
    dot.style.borderRadius = '50%';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.style.background = 'rgba(153,41,234,0.5)';
    dot.style.boxShadow = '0 0 8px rgba(153,41,234,0.5), 0 0 15px rgba(153,41,234,0.3)';
    dot.style.pointerEvents = 'none';
    dot.style.transition = 'all 0.6s ease-out';
    trail.appendChild(dot);

    setTimeout(() => {
        dot.style.transform = 'scale(0)';
        dot.style.opacity = '0';
    }, 50);

    setTimeout(() => dot.remove(), 700);
});

// Hover effect: grow cursor orb
document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.boxShadow = '0 0 15px rgba(153,41,234,0.9), 0 0 35px rgba(153,41,234,0.6)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.boxShadow = '0 0 8px rgba(153,41,234,0.6), 0 0 20px rgba(153,41,234,0.4), 0 0 30px rgba(153,41,234,0.2)';
    });
});
