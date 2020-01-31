const navbarALi = document.querySelectorAll(".navbar ul a li");

for (let i = 0; i < navbarALi.length; i++) {
    navbarALi[i].style.animationDelay = `${50 + (i * 50)}ms`;
}
