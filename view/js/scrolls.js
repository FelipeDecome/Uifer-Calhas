const header = document.querySelector('header')
const docElem = document.documentElement

window.onload = createListener()

function createListener() {
    verifyScrollPos()
    document.addEventListener('scroll', (e) => {
        verifyScrollPos()
        verifyHeader()
    });
}

function verifyHeader() {
    let sPos = window.scrollY

    if (sPos < header.offsetHeight && docElem.classList.contains("header-top")) {
        if (sPos <= header.offsetHeight) {
            let value = - header.offsetHeight + sPos
            console.log(value)
            header.style.top = `${value}px`
        }
    }
}

function verifyScrollPos() {
    let sPos = window.scrollY

    if (sPos > 0) {
        toggleClass(docElem, "header-top", "scroll")

    } else if (sPos === 0) {
        toggleClass(docElem, "scroll", "header-top")
    }
}

function toggleClass(elem, rem, add) {
    elem.classList.remove(rem)
    elem.classList.add(add)
}
