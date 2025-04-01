document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animate-text");
    animatedElements.forEach(el => el.classList.add("show"));

});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => document.querySelector(".part1").style.cssText = "opacity: 1; transform: scale(1);", 800);
    setTimeout(() => document.querySelector(".part2").style.cssText = "opacity: 1; transform: scale(1);", 1800);
    setTimeout(() => document.querySelector(".part3").style.cssText = "opacity: 1; transform: scale(1);", 2800);
});

/*texto digitado*/
document.addEventListener("DOMContentLoaded", function () {
    const text = "Soluções digitais para problemas reais! Do conceito à implementação, cada detalhe importa para criar projetos modernos, intuitivos e cheios de personalidade.";
    let index = 0;
    const speed = 35; // Velocidade da digitação (ms)

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});


// Função para abrir o modal
function openVideoModal() {
    document.getElementById("videoModal").style.display = "block";
}

// Função para fechar o modal
function closeVideoModal() {
    document.getElementById("videoModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".conhecimento-box");
    const descricaoTexto = document.getElementById("descricao-texto");

    // Inicialmente, a descrição é o texto padrão
    descricaoTexto.textContent = "*Passe o cursor ou toque no ícone para ver a descrição*";

    boxes.forEach(box => {
        // Quando o mouse entra no ícone (para desktop)
        box.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) {
                descricaoTexto.textContent = box.getAttribute("data-descricao");
            }
        });

        // Quando o mouse sai do ícone (para desktop)
        box.addEventListener("mouseleave", () => {
            if (window.innerWidth > 768) {
                descricaoTexto.textContent = "*Passe o cursor ou toque no ícone para ver a descrição*";
            }
        });

        // Quando o ícone é tocado (para mobile)
        box.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                descricaoTexto.textContent = box.getAttribute("data-descricao");
            }
        });
    });
});

//email
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    
    let mailtoLink = `mailto:izadanielafernandes@gmail.com?subject=Contato de ${nome}&body=Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
    
    window.location.href = mailtoLink;
});

// Obtém os elementos do DOM
var nome = document.getElementById("nome");
var modal = document.getElementById("modal-imagem");
var imagemModal = document.getElementById("imagem-modal");
var span = document.getElementsByClassName("close")[0];

// Função para abrir o modal com a imagem
nome.onclick = function() {
    modal.style.display = "block";
    imagemModal.src = "img/izadani.jpg"; // Altere o caminho da imagem que deseja exibir
}

// Função para fechar o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
