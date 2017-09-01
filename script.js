(function () {
  var display = document.querySelector('input[name="display"]');
  var equalsButton = document.querySelector('button[value="="]');
  var clearButton = document.querySelector('button[value="C"]');


  function generateButtons() {
    var operators = ['+', '-', '*', '/'];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var btnValues = operators.concat(numbers);
    var allButtons = [];

    for(var i = 0; i < btnValues.length; i++) {
      var button = document.querySelector('button[value="' + btnValues[i] + '"]');
      allButtons.push(button);
    }

    allButtons.forEach(function(btn) {
      btn.addEventListener('click', printValue);
    });
  }

  function addClickHandlers() {
    equalsButton.addEventListener('click', calculateEquation);
    clearButton.addEventListener('click', clearAll);
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

  generateButtons();
  addClickHandlers();

})();
