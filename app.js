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

// Capturando os dados do formulário 

document.querySelector('.enviar__forms').addEventListener('click', function(event) {
  event.preventDefault();

  // Coletar os dados do representante 
  const representante = {
    nome: document.getElementById('dados__representante__nome').value,
    nome_social: document.getElementById('dados__representante__nome__social').value,
    nascimento: document.getElementById('dados__representate__nasicmento').value,
    rg: document.getElementById('dados__representate__RG').value,
    cpf: document.getElementById('dados__representante__CPF').value,
    enderaco: document.getElementById('dados__representante__endereco').value,
    cep: document.getElementById('dados__representante__CEP').value,
    telefone: document.getElementById('dados__representante__telefone').value,
    email: document.getElementById('dados__representante__email').value,
    documento: document.getElementById('dados__representante__documento').files[0]
  };

  // Se tiver Procurador, coletar dados
  const temProcurador = document.querySelector('input[name="tem__procurador"]:checked').value;
  let procurador = {};
  if (temProcurador === "sim") {
    procurador = {
      nome: document.getElementById('nome__procurador').value,
      numero_ordem: document.getElementById('numero__ordem').value,
      telefone: document.getElementById('telefone__contato').value,
      email: document.getElementById('email__contato').value,
      documento: document.getElementById('documento__procurador').files[0]
    };
  } 

  // Dados do representado 
  const representado = {
    instituicao: document.querySelector('.representado input[type="text"]:nth-child(1)').value,
    registro: document.querySelector('.representado input[type="text"]:nth-child(2)').value
  }

  // Dados da mediação 
  const mediacao = document.querySelector('input[name="mediacao"]:checked').value;

  // Dados de descrição de fatos 
  let descricao = '';
  if (document.querySelector('input[name="descricao"]:checked').value === 'sim__texto') {
    descricao = document.getElementById('descricao__texto').value;
  } else {
    descricao = document.getElementById('descricao__anexo').files[0];

  }

  // Coletar provas documentais 
  const provas__documentais = document.querySelector('.provas__documentais input[type="file"]').files;

  // Coletar dados das testemunhas 
  const testemunha = {
    nome: document.getElementById('dados__testemunha__nome').value,
    nome_social: document.getElementById('dados__testemunha__nome__social').value,
    nascimento: document.getElementById('dados__testemunha__nascimento').value,
    rg: document.getElementById('dados__testemunha__RG').value,
    cpf: document.getElementById('dados__testemunha__CPF').value,
    enderaco: document.getElementById('dados__testemunha__endereco').value,
    cep: document.getElementById('dados__testemunha__CEP').value,
    telefone: document.getElementById('dados__testemunha__telefone').value,
    email: document.getElementById('dados__testemunha__email').value,
    documento: document.getElementById('dados__testemunha__documento').files[0]
  }

  // Montando objeto com todos os dados
  const fromData = {
    representante, 
    procurador,
    representado, 
    mediacao, 
    descricao,
    provas, 
    testemunhas
  };

  // enviar formulário
  enviarFomulario(fromData); 
})

 
// Criar função para enviar o forms

