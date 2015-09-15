'use strict';

var maskedMail = document.getElementById('masked-mail');
var arrowDown = document.querySelector('.arrow-down');

if (maskedMail) {
  maskedMail.addEventListener('mouseover', showMail);
  maskedMail.addEventListener('click', showMail);
}

if (arrowDown) {
  arrowDown.addEventListener('click', function() {
    location.href = '#timeline';
  });
}

function showMail() {
  maskedMail.setAttribute('href', 'mailto:fermads?'.replace('?', '@gmail.com'));
}
