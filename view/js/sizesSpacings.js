const nav = document.querySelector("#navbar");

function verifyBottomNav() {
    let navSize = nav.offsetHeight;
    nav.style.bottom = `${-navSize}px`;
}

function navbarAppear() {
    let itens = document.querySelectorAll('.navbar__item')
    for (let i = 0; i < itens.length; i++) {
        itens[i].style.animationDelay = `${50 + (i * 50)}ms`;
    }
}
