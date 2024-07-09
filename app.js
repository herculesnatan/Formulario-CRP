document.getElementById('botao__representante').onclick = function() {
  document.getElementById('dados__representante').style.display = 'block';
};

document.getElementById('botao__procurador').onclick = function() {
  document.getElementById('procurador__forms').style.display = 'block';
};

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

  const formData = new FormData();

  // Coletar os dados do representante 
  formData.append('representante_nome', document.getElementById('dados__representante__nome').value || '');
  formData.append('representante_nome_social', document.getElementById('dados__representante__nome__social').value || '');
  formData.append('representante_nascimento', document.getElementById('dados__representante__nascimento').value || '');
  formData.append('representante_rg', document.getElementById('dados__representante__RG').value || '');
  formData.append('representante_cpf', document.getElementById('dados__representante__CPF').value || '');
  formData.append('representante_endereco', document.getElementById('dados__representante__endereco').value || '');
  formData.append('representante_cep', document.getElementById('dados__representante__CEP').value || '');
  formData.append('representante_telefone', document.getElementById('dados__representante__telefone').value || '');
  formData.append('representante_email', document.getElementById('dados__representante__email').value || '');
  
  const representanteDocumento = document.getElementById('dados__representante__documento').files[0];
  if (representanteDocumento) {
    formData.append('representante_documento', representanteDocumento);
  }

  // Se tiver Procurador, coletar dados
  const temProcurador = document.querySelector('input[name="tem__procurador"]:checked')?.value;
  if (temProcurador === "sim") {
    formData.append('procurador_nome', document.getElementById('nome__procurador').value || '');
    formData.append('procurador_numero_ordem', document.getElementById('numero__ordem').value || '');
    formData.append('procurador_telefone', document.getElementById('telefone__contato').value || '');
    formData.append('procurador_email', document.getElementById('email__contato').value || '');
    
    const procuradorDocumento = document.getElementById('documento__procurador').files[0];
    if (procuradorDocumento) {
      formData.append('procurador_documento', procuradorDocumento);
    }
  }

  // Dados do representado 
  formData.append('representado_instituicao', document.querySelector('.representado input[type="text"]:nth-child(1)')?.value || '');
  formData.append('representado_registro', document.querySelector('.representado input[type="text"]:nth-child(2)')?.value || '');

  // Dados da mediação 
  formData.append('mediacao', document.querySelector('input[name="mediacao"]:checked')?.value || '');

  // Dados de descrição de fatos 
  const descricaoTipo = document.querySelector('input[name="descricao"]:checked')?.value;
  if (descricaoTipo === 'sim__texto') {
    formData.append('descricao', document.getElementById('descricao__texto').value || '');
  } else if (descricaoTipo === 'sim__anexo') {
    const descricaoAnexo = document.getElementById('descricao__anexo').files[0];
    if (descricaoAnexo) {
      formData.append('descricao', descricaoAnexo);
    }
  }

  // Coletar provas documentais 
  const provasDocumentais = document.querySelector('.provas__documentais input[type="file"]').files;
  for (let i = 0; i < provasDocumentais.length; i++) {
    formData.append('provas_documentais', provasDocumentais[i]);
  }

  // Coletar dados das testemunhas 
  formData.append('testemunha_nome', document.getElementById('dados__testemunha__nome').value || '');
  formData.append('testemunha_nome_social', document.getElementById('dados__testemunha__nome__social').value || '');
  formData.append('testemunha_nascimento', document.getElementById('dados__testemunha__nascimento').value || '');
  formData.append('testemunha_rg', document.getElementById('dados__testemunha__RG').value || '');
  formData.append('testemunha_cpf', document.getElementById('dados__testemunha__CPF').value || '');
  formData.append('testemunha_endereco', document.getElementById('dados__testemunha__endereco').value || '');
  formData.append('testemunha_cep', document.getElementById('dados__testemunha__CEP').value || '');
  formData.append('testemunha_telefone', document.getElementById('dados__testemunha__telefone').value || '');
  formData.append('testemunha_email', document.getElementById('dados__testemunha__email').value || '');
  
  const testemunhaDocumento = document.getElementById('dados__testemunha__documento').files[0];
  if (testemunhaDocumento) {
    formData.append('testemunha_documento', testemunhaDocumento);
  }

  // Enviar formulário
  enviarFormulario(formData);
});

// Criar função para enviar o forms
function enviarFormulario(data) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/enviar', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Formulário enviado com sucesso!');
      } else {
        console.error('Erro ao enviar formulário:', xhr.responseText);
      }
    }
  };
  xhr.send(data);
}
