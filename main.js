"use strict";

(function(){

var numbers = lottoNumbers();
var text = document.getElementById('numbers');
text.innerHTML = numbers.join(" ");

// var btn = document.getElementById('btn');
// btn.addEventListener('click', function(e) {
//   e.preventDefault();
//
// });


function lottoNumbers(){
  var numbers = [];

  while (numbers.length < 7){

    var num = Math.ceil(Math.random() * 49);
    var found = false;

    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] == num) {
      found = true;
      }
    }

    if (!found) {
      numbers[numbers.length] = num;
    }
  }
  return numbers;
}

})();
