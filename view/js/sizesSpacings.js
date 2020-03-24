const nav = document.querySelector("#navbar");

function verifyBottomNav() {
    let navSize = nav.offsetHeight;
    nav.style.bottom = `${-navSize}px`;
}

function navbarAppear() {
    nav.classList.addEventListener('change', () => {
        let itens = document.querySelectorAll('.navbar__item')
        for (let i = 0; i < itens.length; i++) {

        }
    })

}
