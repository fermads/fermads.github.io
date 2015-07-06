var maskedMail = document.getElementById('masked-mail');

maskedMail.addEventListener('mouseover', showMail);
maskedMail.addEventListener('click', showMail);

function showMail() {
  maskedMail.setAttribute('href', 'mailto:fermads?'.replace('?', '@gmail.com'));
}