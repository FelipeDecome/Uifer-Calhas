window.onload = function () {

    //* Spacing Search
    verifyBottomNav()

    //* Scroll
    createListener()

    //* Pega todos os Botões
    const buttons = document.querySelectorAll('[data-target]')

    //* Separa os Botões e joga as 'collapses' em um Array
    for (let i = 0; i < buttons.length; i++) {
        let collapseId = buttons[i].getAttribute('data-target')
        const collapse = collapseId

        //* Adiciona um event listener de click nos botões
        buttons[i].addEventListener('click', function () {

            //* verifica se tem active no botão, se sim remove ele, se não, adciona
            // if (buttons[i].getAttribute('data-state') != 'active') {
            if (!buttons[i].classList.contains('active')) {
                //* Remove todos os actives dos botões
                removeAllActives(buttons)

                // buttons[i].setAttribute('data-state', 'active')
                toggleClass(buttons[i], '', 'active')
            } else {
                // buttons[i].removeAttribute('data-state')
                toggleClass(buttons[i], 'active')
            }

            let element = document.querySelector(collapse)
            if (!element.classList.contains('collapse')) {
                removeAllCollapses(buttons)

                toggleClass(element, '', 'collapse')
                // element.classList.add('collapse')
            } else {
                toggleClass(element, 'collapse')
                // element.classList.remove('collapse')
            }

            verifyBackCollapse()
        })
    }
}

//* Remove as classes Collapse / Active dos elementos que mudam dps de 992px
window.onresize = function () {

    //* Spacing Search
    verifyBottomNav()

    if (window.innerWidth > 992) {
        let buttons = document.querySelectorAll('[data-target]')
        buttons.forEach(button => {
            let collapseId = button.getAttribute('data-target')
            let collapse = document.querySelector(collapseId)

            if (collapseId == '#navbar' && button.getAttribute('data-state') == 'active') {
                button.removeAttribute('data-state')
                collapse.classList.remove('collapse')

                verifyBackCollapse()
            }
        })
    }
}

function verifyBackCollapse() {
    let body = document.querySelector('body')
    let elements = document.querySelectorAll(".collapse")
    let buttons = document.querySelectorAll('[data-state]')

    if (elements.length) {
        if (!body.classList.contains('active')) {
            toggleClass(body, "fade", "active")
        }
    } else {
        body.classList.add("fade")
        body.addEventListener("animationend", () => {
            if (body.classList.contains("fade")) {

                body.classList.remove("active")
            }
        })
    }

    //* Fecha os Collapses caso clique fora deles
    if (body.classList.contains('active')) {
        body.addEventListener('click', function (e) {
            if (event.target == body) {
                removeAllActives(buttons)
                removeAllCollapses(buttons)

                verifyBackCollapse()
            }
        })
    }
}

function removeAllActives(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute('data-state') === 'active') {
            elements[i].removeAttribute('data-state')
        }
    }
}

function removeAllCollapses(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        let collapseId = buttons[i].getAttribute('data-target')
        let collapse = collapseId

        let element = document.querySelector(collapse)

        if (element.classList.contains('collapse')) {
            toggleClass(element, null, 'colapse')
            // element.classList.remove('collapse')
        }
    }
}
