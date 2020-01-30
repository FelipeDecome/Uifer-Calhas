const buttons = document.querySelectorAll('[data-target]');

for (let i = 0; i < buttons.length; i++) {

  const collapses = [];
  collapses.push(buttons[i].getAttribute('data-target'));

  //! Pensar melhor nessa parte
  function removeAllCollapses() {
    console.log(collapses[i].classList, '1');
    for (let i = 0; i < collapses.length; i++) {
      let collapse = document.querySelector(collapses[i]);
      collapse.classList.remove('collapse');
      console.log(collapse.classList, '2');
    }
  }

  console.log(collapses, '3');

  buttons[i].addEventListener('click', function () {
    if (!buttons[i].classList.contains('active')) {
      //* REMOVE TODAS AS CLASSES 'ACTIVE'
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('active')) {
          buttons[i].classList.remove('active');
        }
      }
      //* ADCIONA O ACTIVE NO BOTÃO CLICADO
      buttons[i].classList.add('active');
    } else {
      //* REMOVE O ACTIVE NO BOTÃO CLICADO
      buttons[i].classList.remove('active');
    }
    /*     if (!buttons[i].classList.contains('active')) {
          buttons[i].classList.add('active');
        } */
    let element = document.querySelector(buttons[i].getAttribute('data-target'));
    console.log(element.classList, '4');

    if (!element.classList.contains('collapse')) {
      removeAllCollapses();
      element.classList.add('collapse');
    } else {
      removeAllCollapses();
      element.classList.remove('collapse');
    }
  });
}
