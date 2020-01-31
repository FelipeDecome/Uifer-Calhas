window.onload = function () {
    //E: Pega todos os Botões
    const buttons = document.querySelectorAll('[data-target]');

    //E: Separa os Botões e joga as 'collapses' em um Array
    for (let i = 0; i < buttons.length; i++) {
        let collapseId = buttons[i].getAttribute('data-target');
        const collapse = collapseId;

        //E: Adiciona um event listener de click nos botões
        buttons[i].addEventListener('click', function () {

            //E: verifica se tem active no botão, se sim remove ele, se não, adciona
            if (buttons[i].getAttribute('data-state') != 'active') {
                //E: Remove todos os actives dos botões
                removeAllActives(buttons);

                buttons[i].setAttribute('data-state', 'active');
            } else {
                buttons[i].removeAttribute('data-state');
            }

            let element = document.querySelector(collapse);
            if (!element.classList.contains('collapse')) {
                removeAllCollapses(buttons);

                element.classList.add('collapse');
            } else {
                element.classList.remove('collapse');
                navbarOnClose(element);
            }

            verifyBackCollapse();
        });
    }
};

//E: Remove as classes Collapse / Active dos elementos que mudam dps de 992px
window.onresize = function () {
    if (window.innerWidth > 992) {
        let buttons = document.querySelectorAll('[data-target]');
        buttons.forEach(button => {
            let collapseId = button.getAttribute('data-target');
            let collapse = document.querySelector(collapseId);

            if (collapseId == '#navbar' && button.getAttribute('data-state') == 'active') {
                button.removeAttribute('data-state');
                collapse.classList.remove('collapse');

                verifyBackCollapse();
            }
        });
    }
}

function verifyBackCollapse() {
    const body = document.querySelector('body');
    let elements = document.querySelectorAll(".collapse");

    if (elements.length) {
        if (!body.classList.contains('active')) {
            body.classList.add('active');
        }
    } else {
        body.classList.remove('active');
    }
}

function removeAllActives(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute('data-state') === 'active') {
            elements[i].removeAttribute('data-state');
        }
    }
}

function removeAllCollapses(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        let collapseId = buttons[i].getAttribute('data-target');
        let collapse = collapseId;

        let element = document.querySelector(collapse);

        if (element.classList.contains('collapse')) {
            element.classList.remove('collapse');
        }
    }
}
