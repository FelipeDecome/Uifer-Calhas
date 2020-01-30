const buttons = document.querySelectorAll('[data-target]');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    //! ACHAR A FUCKIN RAZÃO DESSA PORRA NÃO FUNCIOANR
    for (button of buttons) {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    }

    if (!buttons[i].classList.contains('active')) {
      buttons[i].classList.add('active');
    }

    let target = buttons[i].getAttribute('data-target');
    let element = document.querySelector(target);

    if (!element.classList.contains('collapse')) {
      removeAllCollapses();

      element.classList.add('collapse');
    } else {
      element.classList.remove('collapse');
    }
  });

  function removeAllCollapses() {
    let collapses = document.getElementsByClassName('collapse');

    for (let i = 0; i < collapses.length; i++) {
      collapses[i].classList.remove('collapse');
    }
  }
}
