/* Loading Animation */
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const progressBarFill = document.getElementById('progress-bar-fill');
    const loadingPercentage = document.getElementById('progress-percentage');
    progressBarFill.style.width = `100%`;

    for(let i = 0; i <= 100; i++) {
        setTimeout(() => {
            loadingPercentage.textContent = `${i}%`;
        }, i * 13);
    }

    setTimeout(() => {
        preloader.classList.add('fade-out-oader');
    }, 1500);
    
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1800);
})



/* Text Typing Animation */
var typed5 = new Typed('#textAnimation', {
    strings: ['Competitive Programmer', 'Specialist in Codeforces', 'Web Developer'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    cursorChar: '|',
    smartBackspace: false,
    loop: true
});



/* Age Calculation */
const today = new Date();
const birthDate = new Date("1999-11-14");
let myAge = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();

if(monthDiff < 0)
    myAge--;

document.getElementById("my-age").innerText = myAge;



/* Counter Up Animation */
setTimeout(() => {
    const counters = document.querySelectorAll(".counter span");
    const interval = 2200;
    counters.forEach(counter => {
        const finalValue = parseInt(counter.getAttribute("data-finalValue"));
        const duration = Math.floor(interval / finalValue);
        let startValue = Math.max(0, finalValue - 500);
        const updateCounter = setInterval(function() {
            startValue += 1;
            counter.textContent = startValue;

            if(startValue == finalValue)
                clearInterval(updateCounter);
        }, duration);
    }); 
}, 1800);



/* call api for finding problem solving info */
// fetch codeforces info
fetch('https://codeforces.com/api/user.rating?handle=nazmul_hossin')
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
            
        return response.json();
    })
    .then(data => document.getElementById("codeforces-contest").innerHTML = data.result.length)
    .catch(error => console.log(error));


fetch('https://codeforces.com/api/user.info?handles=nazmul_hossin&checkHistoricHandles=false')
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
            
        return response.json();
    })
    .then(data => document.getElementById("codeforces-rating").innerHTML = data.result[0]["maxRating"])
    .catch(error => console.log(error));

// fetch leetcode info
fetch('https://alfa-leetcode-api.onrender.com/nazmul_hossin/solved')
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
            
        return response.json();
    })
    .then(data => document.getElementById("leetcode-solved").innerHTML = data.solvedProblem)
    .catch(error => console.log(error));

fetch('https://alfa-leetcode-api.onrender.com/nazmul_hossin/contest')
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
    
        return response.json();
    })
    .then(data => document.getElementById("leetcode-contest").innerHTML = data.contestAttend)
    .catch(error => console.log(error));

// fetch atcoder info
fetch('https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=nazmul_hossin')
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
        
        return response.json();
    })
    .then(data => document.getElementById("atcoder-solved").innerHTML = data.accepted_count)
    .catch(error => console.log(error));



/* Connect 'Contact Me' form with email through formspree*/
window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    var statusDiv = document.getElementById("show-status");
  
    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        document.getElementById("status").classList.add("success");
        document.getElementById("show-status").innerHTML = "Message sent successfully!";
        setTimeout(() => {
            document.getElementById("status").classList.remove("success")
        }, 3000);
    }
  
    function error() {
        document.getElementById("status").classList.add("error");
        document.getElementById("show-status").innerHTML = "Oops! There was a problem.";
        setTimeout(() => {
            document.getElementById("status").classList.remove("error")
        }, 3000);
    }
  
    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
  
// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if(xhr.readyState !== XMLHttpRequest.DONE) return;
        if(xhr.status === 200)
            success(xhr.response, xhr.responseType);
        else 
            error(xhr.status, xhr.response, xhr.responseType);
      
    };
    xhr.send(data);
}



/* Get current year for copyright section*/
document.getElementById("curr_year").innerHTML = today.getFullYear();



/* Active Nav Link on Scroll */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const rightColumn = document.querySelector(".col_right");
rightColumn.onscroll = () => {
    sections.forEach(section => {
        const top = rightColumn.scrollTop;
        const offset = section.offsetTop - 170;
        const height = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("nav ul li a[href*=" + sectionId + "Link]").classList.add("active");
            });
        }
    });
}

// Smooth Scroll
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the ID of the target div from the data-target attribute
        const targetDiv = this.getAttribute('data-target');

        // Get the div to be moved
        const divToMove = document.getElementById(targetDiv);
        divToMove.scrollIntoView({behavior: "smooth"});
    });
});



/* changing theme and color */
// show window on click
document.getElementById('theme-changing-button').addEventListener("click", () => {
    document.getElementById('theme').classList.toggle("show-them-window");
});

const currentTheme = localStorage.getItem('lightTheme');
const body = document.querySelector('body');

// changing theme on load
if(currentTheme == 'enabled')
body.classList.add("light-theme");

// changing theme on click
document.getElementById('light_theme').addEventListener("click", () => {
    body.classList.add("light-theme");
    localStorage.setItem('lightTheme', 'enabled');
});

document.getElementById('dark_theme').addEventListener("click", () => {
    body.classList.remove("light-theme");
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
        } else if(colorName == "yellow") {
            document.documentElement.style.setProperty('--link-color', "#e3aa00");
            document.documentElement.style.setProperty('--link-hover-color', "#FFC107");
        } else if(colorName == "orange") {
            document.documentElement.style.setProperty('--link-color', "#fa5908");
            document.documentElement.style.setProperty('--link-hover-color', "#FF7004");
        } else if(colorName == "punch") {
            document.documentElement.style.setProperty('--link-color', "#CD2636");
            document.documentElement.style.setProperty('--link-hover-color', "#dc3545");
        } else if(colorName == "purple") {
            document.documentElement.style.setProperty('--link-color', "#5F37A8");
            document.documentElement.style.setProperty('--link-hover-color', "#6f42c1");
        } else if(colorName == "green") {
            document.documentElement.style.setProperty('--link-color', "#218A39");
            document.documentElement.style.setProperty('--link-hover-color', "#28a745");
        } else if(colorName == "violet") {
            document.documentElement.style.setProperty('--link-color', "#763385");
            document.documentElement.style.setProperty('--link-hover-color', "#803790");
        } else if(colorName == "cyan") {
            document.documentElement.style.setProperty('--link-color', "#0BADCE");
            document.documentElement.style.setProperty('--link-hover-color', "#0dcaf0");
        }
    }
});



/* show and hide sidebar */
const sidebar = document.querySelector("aside");
const blurDiv = document.getElementById("blur");
document.getElementById('sidebar-show-hide-button').addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
    blurDiv.classList.toggle("add-blur");
});

// hide sidebar when click outside of sidebar
document.addEventListener('click', function(event) {
    if(!sidebar.contains(event.target)) {
        if(event.target.tagName !== 'A' || !event.target.href) {
            sidebar.classList.remove("show-sidebar");
            blurDiv.classList.remove("add-blur");
        } 
    }
});

// hide sidebar when click sidebar link
const sidebarLink = document.querySelectorAll("aside nav ul li a");
sidebarLink.forEach(link => {
    link.addEventListener('click', function(event) {
        sidebar.classList.remove("show-sidebar");
        blurDiv.classList.remove("add-blur");
    });
});