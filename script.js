$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 800, function(){
                window.location.hash = hash;
                $(hash).addClass('active');
                setTimeout(function() {
                    $(hash).removeClass('active');
                }, 1500);
            });
        }
    });

    // Add wow animation for portfolio cards
    $('.card').hover(function() {
        $(this).addClass('wow animate__animated animate__pulse');
    }, function() {
        $(this).removeClass('wow animate__animated animate__pulse');
    });
});




// Script mengganti tema
const btnChangeTheme = document.querySelector(".btnChangeTheme");
const btnChangeThemeI = document.querySelector(".btnChangeTheme i");
const html = document.querySelector("html");
const hours = new Date().getHours();

btnChangeTheme.addEventListener("click", function(event) {
    if (html.dataset.colorMode === "light") {
        html.dataset.colorMode = "dark";
        btnChangeTheme.className = "btnChangeTheme btn btn-outline-light btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
        btnChangeThemeI.className = "fas fa-moon";
    } else {
        html.dataset.colorMode = "light";
        btnChangeTheme.className = "btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
        btnChangeThemeI.className = "far fa-moon";
    }
})

if (hours > 4 && hours < 16) {
    html.dataset.colorMode = "light";
    btnChangeTheme.className = "btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
    btnChangeThemeI.className = "far fa-moon";
} else {
    html.dataset.colorMode = "dark";
    btnChangeTheme.className = "btnChangeTheme btn btn-outline-light btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
    btnChangeThemeI.className = "fas fa-moon";
}

// Nav menu
function openNavMenu(x) {
    x.classList.toggle("change");
}

// Ganti style hamburger menu saat link navbar diklik
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        openNavMenu(navMenu);
    });
});