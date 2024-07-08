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

function toggleDescricaoFatos() {
  const textoSelecionado = document.querySelector('input[name="descricao"][value="sim__texto"]').checked;
  const anexoSelecionado = document.querySelector('input[name="descricao"][value="sim__anexo"]').checked;
  document.getElementById('descricao__texto').style.display = textoSelecionado ? 'block' : 'none';
  document.getElementById('descricao__anexo').style.display = anexoSelecionado ? 'block' : 'none';
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

// Testemunhas
document.addEventListener('DOMContentLoaded', (event) => {
  let testemunhaCount = 0;
  const maxTestemunhas = 3;

  function openTestemunhaModal() {
      document.getElementById('dados__testemunha').style.display = 'block';
  }

  function closeTestemunhaModal() {
      document.getElementById('dados__testemunha').style.display = 'none';
  }

  document.querySelectorAll('input[name="testemunha"]').forEach((elem) => {
      elem.addEventListener('change', function(event) {
          if (event.target.value === 'sim') {
              openTestemunhaModal();
          } else {
              closeTestemunhaModal();
          }
      });
  });

  document.getElementById('close__testemunha').addEventListener('click', function() {
      closeTestemunhaModal();
  });

  document.getElementById('addTestemunhaBtn').addEventListener('click', function() {
      if (testemunhaCount < maxTestemunhas) {
          testemunhaCount++;
          // Aqui você pode adicionar lógica para salvar os dados da testemunha
          alert('Testemunha adicionada! Número total de testemunhas: ' + testemunhaCount);
          closeTestemunhaModal();

          if (testemunhaCount >= maxTestemunhas) {
              alert('Número máximo de testemunhas atingido!');
              document.querySelector('input[value="sim"]').disabled = true;
          }
      }
  });
});

document.getElementById('representanteForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  fetch('/submit', {
      method: 'POST',
      body: formData
  }).then(response => {
      if (response.ok) {
          alert('Dados enviados com sucesso!');
      } else {
          alert('Erro ao enviar os dados.');
      }
  }).catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar os dados.');
  });
});

// Colocar um alert de tempo de resposta 
