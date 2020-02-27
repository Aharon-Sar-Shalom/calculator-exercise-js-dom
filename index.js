var calcButton = document.querySelector('button');

calcButton.onclick = function() {
    var num1 = document.querySelector('#num1');
    var num2 = document.querySelector('#num2');
    var sum = document.querySelector('.sum');
      sum.innerHTML = parseInt(num1.value) + parseInt(num2.value)
}

