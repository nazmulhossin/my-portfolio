// Text Typing Animation
var typed5 = new Typed('#textAnimation', {
    strings: ['Competitive Programmer', 'Specialist in Codeforces', 'Web Developer'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    cursorChar: '|',
    smartBackspace: false,
    loop: true
});

// Counter Up
const overviewEle = document.querySelectorAll(".counter span");
const interval = 2000;
overviewEle.forEach(ele => {
    const finalValue = parseInt(ele.getAttribute("data-finalValue"));
    const duration = Math.floor(interval / finalValue);
    let startValue = Math.max(0, finalValue - 500);
    const counter = setInterval(function() {
        startValue += 1;
        ele.textContent = startValue;

        if(startValue == finalValue)
            clearInterval(counter);
    }, duration);
});

// Get current year
const date = new Date();
document.getElementById("curr_year").innerHTML = date.getFullYear();



// Active Nav Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const main = document.querySelector("main");
main.onscroll = () => {
    sections.forEach(section => {
        const top = main.scrollTop;
        const offset = section.offsetTop - 170;
        const height = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("nav ul li a[href*=" + sectionId + "]").classList.add("active");
            });
        }
    });
}

// changing theme and color
// show window on click
document.getElementById('theme-changing-button').addEventListener("click", () => {
    document.getElementById('theme').classList.toggle("show-them-window");
});

// changing theme on load
const currentTheme = localStorage.getItem('lightTheme');
const mainContainer = document.querySelector('.main-container');
window.onload = function () {
    if(currentTheme == 'enabled')
        mainContainer.classList.add("light-theme");
};

// changing theme on click
document.getElementById('light_theme').addEventListener("click", () => {
    mainContainer.classList.add("light-theme");
    localStorage.setItem('lightTheme', 'enabled');
});

document.getElementById('dark_theme').addEventListener("click", () => {
    mainContainer.classList.remove("light-theme");
    localStorage.setItem('lightTheme', '');
});

// changing color on click
document.querySelector('#color-switcher div').addEventListener('click', function(event) {
    if(event.target.parentNode.classList.contains('color')) {
        const colorName = event.target.className;
        document.querySelector(".color-applyed").classList.remove("color-applyed");
        event.target.parentNode.classList.add("color-applyed");

        if(colorName == "caribbean-green") {
            document.documentElement.style.setProperty('--link-color', "#069c7a");
            document.documentElement.style.setProperty('--link-hover-color', "#00BC91");
        }

        else if(colorName == "yellow") {
            document.documentElement.style.setProperty('--link-color', "#e3aa00");
            document.documentElement.style.setProperty('--link-hover-color', "#FFC107");
        }

        else if(colorName == "orange") {
            document.documentElement.style.setProperty('--link-color', "#fa5908");
            document.documentElement.style.setProperty('--link-hover-color', "#FF7004");
        }

        else if(colorName == "punch") {
            document.documentElement.style.setProperty('--link-color', "#CD2636");
            document.documentElement.style.setProperty('--link-hover-color', "#dc3545");
        }
        
        else if(colorName == "purple") {
            document.documentElement.style.setProperty('--link-color', "#5F37A8");
            document.documentElement.style.setProperty('--link-hover-color', "#6f42c1");
        }

        else if(colorName == "green") {
            document.documentElement.style.setProperty('--link-color', "#218A39");
            document.documentElement.style.setProperty('--link-hover-color', "#28a745");
        }

        else if(colorName == "violet") {
            document.documentElement.style.setProperty('--link-color', "#763385");
            document.documentElement.style.setProperty('--link-hover-color', "#803790");
        }

        else if(colorName == "cyan") {
            document.documentElement.style.setProperty('--link-color', "#0BADCE");
            document.documentElement.style.setProperty('--link-hover-color', "#0dcaf0");
        }
    }
});

// Home page background animation 
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

// Smooth Scroll
// if(!document.querySelector("html").classList.contains('w-editor')){
//     const lenis = new Lenis({
//         wrapper: document.getElementById('scrollable-content'),
//         duration: 2,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//         direction: 'vertical', // vertical, horizontal
//         gestureDirection: 'vertical', // vertical, horizontal, both
//         smooth: true,
//         smoothTouch: false,
//         touchMultiplier: 2,
//         infinite: false,
//     })
  
//     function raf(time) {
//         lenis.raf(time)
//         requestAnimationFrame(raf)
//     }
  
//     // Grab all elements that have a "data-target" attribute
//     const scrollButtons = document.querySelectorAll('[data-target]');
  
//     // For each element, listen to a "click" event
//     scrollButtons.forEach(button => {
//         button.addEventListener('click', e => {
//             e.preventDefault();
  
//             // get the DOM element by the ID (data-target value)
//             var target = button.dataset.target,
//                 $el = document.getElementById(target.replace('#', ''));
    
//             // Use lenis.scrollTo() to scroll the page to the right element
//             lenis.scrollTo($el, {
//                 offset: 0, 
//                 immediate: false,
//                 duration: 3,
//                 easing: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2), // https://easings.net
//             });
//         });
//     });
  
//     requestAnimationFrame(raf)
// }