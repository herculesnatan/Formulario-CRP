// app.js

document.getElementById('botao__representante').onclick = function() {
  document.getElementById('dados__representante').style.display = 'block';
}

document.getElementById('botao__procurador').onclick = function() {
  document.getElementById('procurador__forms').style.display = 'block';
}

function toggleProcuradorForm() {
  const simProcurador = document.querySelector('input[name="tem__procurador"][value="sim"]').checked;
  const procuradorButton = document.getElementById('procurador__button');
  procuradorButton.style.display = simProcurador ? 'block' : 'none';
}

document.getElementById('botao__procurador').addEventListener('click', function() {
  document.getElementById('procurador__forms_modal').style.display = 'block';
});

document.getElementById('close__procurador').addEventListener('click', function() {
  document.getElementById('procurador__forms_modal').style.display = 'none';
});

document.getElementById('botao__representante').addEventListener('click', function() {
  document.getElementById('dados__representante').style.display = 'block';
});

document.getElementById('close__representante').addEventListener('click', function() {
  document.getElementById('dados__representante').style.display = 'none';
});