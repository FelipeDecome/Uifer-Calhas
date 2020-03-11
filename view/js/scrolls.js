const header = document.querySelector('header')
const docElem = document.documentElement

window.onload = createListener()

function createListener() {
    verifyScrollPos()
    document.addEventListener('scroll', (e) => {
        verifyScrollPos()
    });
}

function headerAnimationListener() {

    header.addEventListener('webkitAnimationEnd', e => {
        if (document.documentElement.classList.contains('header-top')) {
            toggleClass(header, null, 'showing')
        }

        if (header.classList.contains('hiding')) {
            toggleClass(header, 'hiding', 'showing')
        }
    });
}

function verifyScrollPos() {
    let sPos = window.scrollY

    // console.log(sPos);

    if (sPos > 0) {
        docElem.classList.remove("header-top")
        header.classList.remove('showing')
        header.classList.add('hiding')

    } else if (sPos === 0) {
        docElem.classList.add("header-top")
        header.classList.remove('hiding')
        header.classList.add('showing')
    }
}

function toggleClass(elem, rem, add) {
    elem.classList.remove(rem)
    elem.classList.add(add)
}
