const header = document.querySelector('header')
const docElem = document.documentElement

window.onload = createListener()

function createListener() {
    verifyScrollPos()
    document.addEventListener('scroll', (e) => {
        verifyScrollPos()
    });
}

function verifyScrollPos() {
    let sPos = window.scrollY

    if (sPos > 0) {
        toggleClass(docElem, "header-top", "scroll")

    } else if (sPos === 0) {
        toggleClass(docElem, "scroll", "header-top")
    }
}
