const nav = document.querySelector("#navbar");

function verifyBottomNav() {
    let navSize = nav.offsetHeight;
    nav.style.bottom = `${-navSize}px`;
}
