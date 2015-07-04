var me = document.getElementById('masked-mail');
me.addEventListener('mouseover', function() {
  me.setAttribute('href', 'mailto:fermads?'.replace('?', '@gmail.com'))
})