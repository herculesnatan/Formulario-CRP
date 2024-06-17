function abrirForms() {
    const formRepresentante = document.getElementById("dados__representante");

    // verificar se o forms está visível 
    if (formRepresentante.style.display == 'none') {
        // mostrar formulário escondido 
        formRepresentante.style.display = 'block';
    } else {
        // esconder formulário
        formRepresentante.style.display = 'none';
    }
}

function toggleForm() {
    var radio = document.querySelector('input[name="tem__procurador"]:checked');
    var form = document.getElementById('procurador__forms');
    
    if (radio.value === "sim__procurador") {
      form.style.display = 'block'; // Mostra o formulário
    } else {
      form.style.display = 'none'; // Oculta o formulário
    }
  }


// Capturar evento 
const botaoRepresentante = document.getElementById('botao__representante');
botaoRepresentante.addEventListener('click', abrirForms);
