window.onload = function () {
    //* Pega todos os Botões
    const buttons = document.querySelectorAll('[data-target]');

    //* Separa os Botões e joga as 'collapses' em um Array
    for (let i = 0; i < buttons.length; i++) {
        const collapses = [];
        let collapseId = buttons[i].getAttribute('data-target');
        collapses.push(collapseId);
        //* Adiciona um event listener de click nos botões
        buttons[i].addEventListener('click', function () {

            //! JOGAR DENTRO DE OUTRO FOR PRA PODER PEGAR OS 2 ATÉ O FIM DA FUNÇÃO

            //* verifica se tem active no botão, se sim remove ele, se não, adciona
            if (!buttons[i].classList.contains('active')) {
                //* Remove todos os actives dos botões
                for (let j = 0; j < buttons.length; j++) {
                    if (buttons[j].classList.contains('active')) {
                        buttons[j].classList.remove('active');
                    }
                }
                buttons[i].classList.add('active');
            } else {
                buttons[i].classList.remove('active');
            }

            for (let x = 0; x < collapses.length; x++) {
                let element = document.querySelector(collapses);
                //console.log(element, i, collapses);
            }
        });
    }

};

function removeAllCollapses(collapses) {
    for (i = 0; i < collapses.length; i++) {
        let elementId = collapses[i];
        let element = document.querySelector(elementId);

        console.log(element, i);
    }
}
