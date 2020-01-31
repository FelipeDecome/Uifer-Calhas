window.onload = function () {
    //* Pega todos os Botões
    const buttons = document.querySelectorAll('[data-target]');

    //* Separa os Botões e joga as 'collapses' em um Array
    for (let i = 0; i < buttons.length; i++) {
        let collapseId = buttons[i].getAttribute('data-target');
        const collapse = collapseId;

        //* Adiciona um event listener de click nos botões
        buttons[i].addEventListener('click', function () {

            //* verifica se tem active no botão, se sim remove ele, se não, adciona
            if (buttons[i].getAttribute('data-state') != 'active') {
                //* Remove todos os actives dos botões
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
            }

            verifyBackCollapse();

        });
    }
};

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
