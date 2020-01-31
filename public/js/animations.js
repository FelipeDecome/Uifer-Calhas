const navbarALi = document.querySelectorAll(".navbar ul a li");
// const navbar = document.querySelector('#navbar');

for (let i = 0; i < navbarALi.length; i++) {
    navbarALi[i].style.animationDelay = `${50 + (i * 50)}ms`;
}

//! Adcionar fade Animation
function navbarOnClose(navbar) {
    if (!navbar.clasList.contains('collapse')) {
        navbar.style.animationName = "fade";
        navbar.style.animationDuration = "1s";
        navbar.style.animationDirection = "reverse";
        navbar.style.animationTimingFunction = "ease";
    }
}
