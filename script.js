(function () {
  var display = document.querySelector('input[name="display"]');
  var equalsButton = document.querySelector('button[value="="]');
  var clearButton = document.querySelector('button[value="C"]');

  var operators = ['+', '-', '*', '/'];
  var allButtons = [];

  for(var i = 0; i < 10; i++) {
    var numButton = document.querySelector('button[value="'+i+'"');
    allButtons.push(numButton);
  }

  for(var j = 0; j < operators.length; j ++) {
    var operatorButton = document.querySelector('button[value="' + operators[j] + '"]');
    allButtons.push(operatorButton);
  }

  console.log(allButtons);

  allButtons.forEach(function(btn) {
    btn.addEventListener('click', printValue);
  });

  function printValue(event) {
    event.preventDefault();
    display.value += this.value;
  }

  equalsButton.addEventListener('click', calculateEquation);

  function calculateEquation(event) {
    event.preventDefault();
    display.value = eval(display.value);
  }

  clearButton.addEventListener('click', clearAll);

  function clearAll(event) {
    event.preventDefault();
    display.value = '0';
  }

})();
