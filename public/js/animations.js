const navbarALi = document.querySelectorAll(".navbar ul a li");
// const navbar = document.querySelector('#navbar');

for (let i = 0; i < navbarALi.length; i++) {
    navbarALi[i].style.animationDelay = `${50 + (i * 50)}ms`;
}

//! Adcionar fade Animation
function navbarOnClose(navbar) {
    if (!navbar.clasList.contains('collapse')) {
        navbar.style.animationName = "";
        navbar.style.animationDuration = "";
        navbar.style.animation = "";
        navbar.style.animationName = "";
    }
}
