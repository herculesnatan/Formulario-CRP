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

function addProcurador() {
    
}
// Capturar evento 
const botaoRepresentante = document.getElementById('botao__representante');
botaoRepresentante.addEventListener('click', abrirForms);
