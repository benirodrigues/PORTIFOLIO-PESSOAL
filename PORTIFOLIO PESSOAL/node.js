// script.js
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simulação de envio
    document.getElementById('mensagem-confirmacao').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('mensagem-confirmacao').classList.add('hidden');
    }, 3000);

    // Limpar formulário
    document.getElementById('form-contato').reset();
});
