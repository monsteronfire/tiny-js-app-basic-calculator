(function () {
  var display = document.querySelector('input[name="display"]');

  function generateButtons() {
    var btnValues = ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var allButtons = [];

    for(var i = 0; i < btnValues.length; i++) {
      allButtons.push(document.querySelector('button[value="' + btnValues[i] + '"]'));
    }

    return allButtons;
  }

  function addClickHandlers() {
    document.querySelector('button[value="="]').addEventListener('click', calculateEquation);
    document.querySelector('button[value="C"]').addEventListener('click', clearAll);

    generateButtons().forEach(function(btn) {
      btn.addEventListener('click', printValue);
    });
  }

  function printValue(event) {
    event.preventDefault();
    display.value += this.value;
  }

  function calculateEquation(event) {
    event.preventDefault();
    display.value = eval(display.value);
  }

  function clearAll(event) {
    event.preventDefault();
    display.value = '';
  }

  function init() {
    addClickHandlers();
  }

  init();
})();
