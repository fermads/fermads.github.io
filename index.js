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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-78945604-1', 'auto');
ga('send', 'pageview');

