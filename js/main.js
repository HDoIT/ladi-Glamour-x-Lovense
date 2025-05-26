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
const mobileNavMenu = document.getElementById('mobile-nav-menu');

menuToggle.addEventListener('click', () => {
    mobileNavMenu.classList.toggle('active');
    menuToggle.innerHTML = mobileNavMenu.classList.contains('active')
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="24" height="24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.19 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.19 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                </svg>`
        : `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16H16C7.163 84 0 91.163 0 100v16c0 8.837 7.163 16 16 16zm416 56H16c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16zm0 128H16c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"/>
                </svg>`;
});

// Tab Functionality
function activateTab(tabId) {
    // Remove active class from all buttons and contents
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to corresponding tab and content
    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Setup desktop tabs
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        activateTab(tabId);
        document.querySelectorAll('.product-slider-container').forEach(container => {
            const productGrid = container.querySelector('.product-grid');
            productGrid.style.transform = 'translateX(0)';
        });
    });
});

// Setup mobile product links
const productLinks = document.querySelectorAll('.product-link');
productLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.getAttribute('data-tab');

        // Close mobile menu
        mobileNavMenu.classList.remove('active');
        menuToggle.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16H16C7.163 84 0 91.163 0 100v16c0 8.837 7.163 16 16 16zm416 56H16c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16zm0 128H16c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"/>
                </svg>`;

        // Scroll to products section
        document.getElementById('products').scrollIntoView({
            behavior: 'smooth'
        });

        // Activate the corresponding tab
        activateTab(tabId);
    });
});

// Close menu when clicking on regular links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a:not(.product-link)');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavMenu.classList.remove('active');
        menuToggle.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16H16C7.163 84 0 91.163 0 100v16c0 8.837 7.163 16 16 16zm416 56H16c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16zm0 128H16c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"/>
                </svg>`;
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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

// Testimonial Slider
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    let slideInterval;

    // Function to show slide
    function showSlide(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Auto slide
    function startSlider() {
        slideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % testimonials.length;
            showSlide(nextSlide);
        }, 5000);
    }

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            clearInterval(slideInterval);
            showSlide(parseInt(this.getAttribute('data-slide')));
            startSlider();
        });
    });

    // Start the slider
    startSlider();

    // Sticky CTA
    const stickyCta = document.getElementById('stickyCta');

    window.addEventListener('scroll', function () {
        // Show CTA when user scrolls 50% down the page
        if (window.scrollY > (document.body.scrollHeight - window.innerHeight) * 0.5) {
            stickyCta.classList.add('show');
        } else {
            stickyCta.classList.remove('show');
        }
    });

    // Chat Popup
    const chatPopup = document.getElementById('chatPopup');
    const chatBox = document.getElementById('chatBox');
    let chatVisible = false;

    chatPopup.addEventListener('click', function () {
        chatVisible = !chatVisible;
        if (chatVisible) {
            chatBox.classList.add('show');
            chatPopup.style.transform = 'scale(1.1)';
        } else {
            chatBox.classList.remove('show');
            chatPopup.style.transform = 'scale(1)';
        }
    });

    // Close chat when clicking outside
    document.addEventListener('click', function (e) {
        if (chatVisible && !chatBox.contains(e.target)) {
            if (e.target !== chatPopup && !chatPopup.contains(e.target)) {
                chatVisible = false;
                chatBox.classList.remove('show');
                chatPopup.style.transform = 'scale(1)';
            }
        }
    });
});

// Countdown Timer
function updateCountdown() {
    // Set the target date (24 hours from now)
    const now = new Date();
    const targetDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now

    // Update the countdown every second
    const countdownInterval = setInterval(function () {
        const now = new Date();
        const timeLeft = targetDate - now;

        // Calculate hours, minutes, seconds
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // If the countdown is finished
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '<div class="expired">Offer expired!</div>';
        }
    }, 1000);
}

// Random stock level to create urgency
function updateStockLevel() {
    const stockLevels = ["Only 1 left!", "Only 2 left at this price!", "Only 3 remaining!", "Last 5 at 30% off!"];
    const badges = document.querySelectorAll('.scarcity-badge');

    // Change stock level every 10 seconds for demo purposes
    setInterval(function () {
        const randomIndex = Math.floor(Math.random() * stockLevels.length);
        badges[0].textContent = stockLevels[randomIndex];
    }, 10000);
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    updateCountdown();
    updateStockLevel();

    // Add hover effects
    const offerItems = document.querySelectorAll('.offer-item');
    offerItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });
        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved preference on page load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}


document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            document.getElementById(tabId).classList.add('active');
            
            // Reinitialize slider for the new tab after a small delay
            setTimeout(() => {
                const activeContainer = document.querySelector('.tab-content.active .product-slider-container');
                if (activeContainer) {
                    setupSlider(activeContainer);
                }
            }, 50);
        });
    });

    // Slider functionality
    function setupSlider(container) {
        const slider = container.querySelector('.product-slider');
        const productGrid = container.querySelector('.product-grid');
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        let products = container.querySelectorAll('.product-card');
        let currentPosition = 0;
        let productWidth = 0;
        let visibleProducts = 3;
        let maxPosition = 0;

        function calculateDimensions() {
            // Get actual gap from CSS
            const style = window.getComputedStyle(productGrid);
            const gap = parseInt(style.gap) || 30;
            
            // Make sure first product is visible for measurement
            if (products.length > 0) {
                const originalDisplay = products[0].style.display;
                products[0].style.display = 'block';
                productWidth = products[0].offsetWidth + gap;
                products[0].style.display = originalDisplay;
            } else {
                productWidth = 0;
            }
            
            // Determine visible products based on screen size
            if (window.innerWidth <= 768) {
                visibleProducts = 1;
            } else if (window.innerWidth <= 1024) {
                visibleProducts = 2;
            } else {
                visibleProducts = 3;
            }
            
            maxPosition = -((products.length - visibleProducts) * productWidth);
            
            console.log(`Slider dimensions - Width: ${productWidth}, Visible: ${visibleProducts}, Max: ${maxPosition}`);
        }

        function updateSlider() {
            productGrid.style.transform = `translateX(${currentPosition}px)`;
            prevBtn.disabled = currentPosition >= 0;
            nextBtn.disabled = currentPosition <= maxPosition;
        }

        function slide(direction) {
            calculateDimensions();
            
            if (direction === 'next' && currentPosition > maxPosition) {
                currentPosition = Math.max(currentPosition - productWidth, maxPosition);
            } else if (direction === 'prev' && currentPosition < 0) {
                currentPosition = Math.min(currentPosition + productWidth, 0);
            }
            
            updateSlider();
        }

        // Initialize
        calculateDimensions();
        updateSlider();

        // Event listeners
        nextBtn.addEventListener('click', () => slide('next'));
        prevBtn.addEventListener('click', () => slide('prev'));

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                calculateDimensions();
                // Adjust current position if needed
                currentPosition = Math.max(currentPosition, maxPosition);
                currentPosition = Math.min(currentPosition, 0);
                updateSlider();
            }, 100);
        });
    }

    // Initialize first slider
    const initialSlider = document.querySelector('.product-slider-container');
    if (initialSlider) {
        setupSlider(initialSlider);
    }
});