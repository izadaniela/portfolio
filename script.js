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


document.querySelectorAll(".conhecimento-box").forEach(box => {
    // Variável para verificar se a descrição está visível
    let isMobile = window.innerWidth <= 768;
    let descricaoElemento = document.createElement("div");
    descricaoElemento.id = "descricao-projeto";
    descricaoElemento.style.display = "none";
    descricaoElemento.style.color = "#fff";
    descricaoElemento.style.position = "absolute";
    descricaoElemento.style.top = "0";
    descricaoElemento.style.left = "0";
    descricaoElemento.style.right = "0";
    descricaoElemento.style.textAlign = "center";
    descricaoElemento.style.padding = "10px";
    box.appendChild(descricaoElemento);

    // Evento de mouse para desktop
    if (!isMobile) {
        box.addEventListener("mouseenter", function() {
            let descricao = this.getAttribute("data-descricao");
            descricaoElemento.innerText = descricao;
            descricaoElemento.style.display = "block";
        });

        box.addEventListener("mouseleave", function() {
            descricaoElemento.style.display = "none";
        });
    } else {
        // Evento de toque ou clique para mobile
        box.addEventListener("click", function() {
            let descricao = this.getAttribute("data-descricao");
            if (descricaoElemento.style.display === "none" || descricaoElemento.style.display === "") {
                descricaoElemento.innerText = descricao;
                descricaoElemento.style.display = "block";
            } else {
                descricaoElemento.style.display = "none";
            }
        });
    }
});

function openVideo(videoId) {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
        videoElement.style.display = "block"; // Torna o vídeo visível
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const nomeElement = document.getElementById("nome");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close");

    // Quando o nome for clicado, mostra a janela modal com a foto
    nomeElement.addEventListener('click', function () {
        modal.classList.add("show");
    });

    // Quando o botão de fechar (X) for clicado, fecha a janela modal
    closeBtn.addEventListener('click', function () {
        modal.classList.remove("show");
    });

    // Fecha a janela modal se o usuário clicar fora da imagem
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".conhecimento-box");
    const descricaoTexto = document.getElementById("descricao-texto");

    // Inicialmente, a descrição não tem valor de conteúdo padrão para evitar duplicações
    descricaoTexto.textContent = "*Passe o cursor no ícone para ver a descrição*";

    boxes.forEach(box => {
        // Quando o mouse entra em um ícone, muda a descrição
        box.addEventListener("mouseenter", () => {
            if (window.innerWidth > 768) { 
                descricaoTexto.textContent = box.getAttribute("data-descricao");
            }
        });

        // No caso de um clique (para mobile), alteramos a descrição também
        box.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                descricaoTexto.textContent = box.getAttribute("data-descricao");
            }
        });
    });

    // A descrição no desktop será resetada para o texto inicial quando o mouse sair de um ícone
    // Removemos o 'mouseleave' para evitar a descrição de ser resetada de forma errada.
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


