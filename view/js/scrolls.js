const header = document.querySelector('header')
const docElem = document.documentElement

function createListener() {
    verifyScrollPos()
    animations()
    document.addEventListener('scroll', (e) => {
        verifyScrollPos()
        animations()
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

//Add animations when element appear on screen
function animations() {
    let animatedElem = document.querySelectorAll("[data-start-animation]")

    animatedElem.forEach(element => {
        let animation = element.getAttribute("data-start-animation")
        let child = element.getAttribute("data-childs")

        let elemPos = element.offsetTop
        let windowTopMin = window.scrollY
        let windowTopMax = windowTopMin + window.innerHeight
        if (!child) {
            if ((elemPos > windowTopMin && elemPos < windowTopMax) && !element.classList.contains(animation)) {
                toggleClass(element, null, animation)
            }
        } else {
            let childs = element.childNodes
            for (let i = 1; i < childs.length; i++) {
                let childPos = childs[i].offsetTop
                console.log((childPos > windowTopMin && childPos < windowTopMax) && !childs[i].classList.contains(animation))
                if ((childPos > windowTopMin && childPos < windowTopMax) && !childs[i].classList.contains(animation)) {
                    toggleClass(childs[i], null, animation)
                    i++
                }
            }
        }
    })
}
