// Passo 3: Selecionar o formulário e os campos
const formulario = document.getElementById("meuFormulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoIdade = document.getElementById("idade");
const mensagemErro = document.getElementById("erro");

// Adicionar o event listener para o "submit"
formulario.addEventListener("submit", function(event) {
    
    // Criamos uma variável para guardar as mensagens de erro
    let erros = [];

    // Validações manuais
    if (campoNome.value.trim() === "") {
        erros.push("O nome não pode estar vazio.");
    }

    if (!campoEmail.value.includes("@")) {
        erros.push("O email deve conter um '@'.");
    }

    if (parseInt(campoIdade.value) <= 0 || campoIdade.value === "") {
        erros.push("A idade deve ser maior que 0.");
    }

    // Impedir o envio se houver erro
    if (erros.length > 0) {
        event.preventDefault(); // Para o envio do formulário
        
        // Exibe as mensagens usando textContent
        mensagemErro.textContent = erros.join(" / ");
    } else {
        // Se estiver tudo certo, limpa as mensagens
        mensagemErro.textContent = "";
        alert("Formulário enviado com sucesso!");
    }
});