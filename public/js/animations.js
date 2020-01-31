const navbarALi = document.querySelectorAll(".navbar ul a li");
// const navbar = document.querySelector('#navbar');

for (let i = 0; i < navbarALi.length; i++) {
    navbarALi[i].style.animationDelay = `${50 + (i * 50)}ms`;
}

//! Adcionar fade Animation
function navbarOnClose(element) {
    if (!element.classList.contains('collapse')) {
        element.style.animationName = "fade";
        element.style.animationDuration = "1s";
        element.style.animationDirection = "reverse";
        element.style.animationTimingFunction = "ease";

        setTimeout(() => {
            element.style.animationName = null;
            element.style.animationDuration = null;
            element.style.animationDirection = null;
            element.style.animationTimingFunction = null;
        }, 1100);
    }

}
