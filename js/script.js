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

// Get current year
const date = new Date();
document.getElementById("curr_year").innerHTML = date.getFullYear();

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