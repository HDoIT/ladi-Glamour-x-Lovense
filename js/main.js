// Ripple effect for buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;

        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});
// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.testimonial-dot');
let currentSlide = 0;

function showSlide(n) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + testimonials.length) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', function () {
        showSlide(parseInt(this.getAttribute('data-slide')));
    });
});

// Auto slide change every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.accordion-item.active');

        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
        }

        item.classList.toggle('active');
    });
});

// Video play button
const videoOverlay = document.querySelector('.video-overlay');
const video = document.querySelector('.video-container video');

videoOverlay.addEventListener('click', function () {
    video.play();
    this.style.display = 'none';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;

    // Cập nhật vị trí chuột
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Vòng lặp animation siêu mượt
    const render = () => {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        requestAnimationFrame(render);
    };
    render();
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});
document.addEventListener('click', function (e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple-effect');
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});
const backToTopBtn = document.getElementById("backToTop");

// Show/hide button when scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});