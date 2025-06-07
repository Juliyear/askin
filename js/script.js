document.addEventListener('DOMContentLoaded', () => {
    // --- Seletores de Elementos ---
    const container = document.querySelector('.container');
    const filmes = document.querySelectorAll('.filme');
    const btnAceitar = document.getElementById('btn-aceitar');
    const btnRecusar = document.getElementById('btn-recusar');
    const textoFilmeSelecionado = document.getElementById('filme-selecionado-texto');
    const modal = document.getElementById('modal-surpresa');
    const btnSim = document.getElementById('btn-sim');
    const btnNao = document.getElementById('btn-nao');
    const textoResultado = document.getElementById('texto-resultado');
    
    // Pega o elemento de áudio local
    const musicaFundo = document.getElementById('musica-fundo');

    let filmeEscolhido = null;

    // --- Funções de Controle de Áudio ---
    function playAudio() {
        musicaFundo.play().catch(error => {
            console.log("O navegador bloqueou o autoplay. A música começará com a interação do usuário.");
        });
    }

    function stopAudio() {
        musicaFundo.pause();
        musicaFundo.currentTime = 0; // Opcional: reinicia a música
    }

    // --- Lógica Principal do Site ---
    function aplicarEstadoFinal(filme, aceitouExtra) {
        container.classList.add('finalizado');
        
        filmes.forEach(f => {
            if (f.dataset.filme === filme) {
                f.classList.add('selecionado');
            }
        });

        // Seus textos personalizados foram mantidos!
        let mensagemFinal = `Perfeito Momoooo 💕💕💕💕<br>Vamos assistir "<strong>${filme}</strong>"`;
        if (aceitouExtra) {
            mensagemFinal += ", e o 💦💦💦💦💦 depois tá confirmado hein! 🥵💦";
            mensagemFinal += "<br><br>E por você ter aceitado o 💦, como incentivo por ser uma boa menina, você pode escolher alguma coisa pra eu comprar pra você comer no dia 🥗😋";
            playAudio();
        } else {
            mensagemFinal += ".<br>O mais importante é o nosso tempo juntos. Te amo ❤️";
            stopAudio();
        }
        
        textoResultado.innerHTML = mensagemFinal;
    }

    function verificarEstadoSalvo() {
        const respostaSalvaJSON = localStorage.getItem('conviteResposta');
        if (respostaSalvaJSON) {
            const respostaSalva = JSON.parse(respostaSalvaJSON);
            aplicarEstadoFinal(respostaSalva.filme, respostaSalva.aceitouExtra);
        }
    }
    
    function finalizarEscolha(aceitouExtra) {
        modal.classList.remove('visivel');
        
        const resposta = {
            filme: filmeEscolhido,
            aceitouExtra: aceitouExtra
        };

        localStorage.setItem('conviteResposta', JSON.stringify(resposta));
        aplicarEstadoFinal(resposta.filme, resposta.aceitouExtra);
    }
    
    // --- Event Listeners ---

    filmes.forEach(filme => {
        filme.addEventListener('click', () => {
            if (container.classList.contains('finalizado')) return;
            
            filmes.forEach(f => f.classList.remove('selecionado'));
            filme.classList.add('selecionado');
            filmeEscolhido = filme.dataset.filme;
            textoFilmeSelecionado.textContent = `Você escolheu: ${filmeEscolhido}!`;
            btnAceitar.disabled = false;
        });
    });
    
    btnRecusar.addEventListener('click', () => alert("Já entendi o recado... 😢 Se mudar de ideia, é só recarregar a página."));
    
    btnAceitar.addEventListener('click', () => {
        modal.classList.add('visivel');
        playAudio(); // Tenta tocar a música assim que ela aceita o convite principal
    });
    
    btnSim.addEventListener('click', () => finalizarEscolha(true));
    btnNao.addEventListener('click', () => finalizarEscolha(false));

    // --- Inicialização ---
    verificarEstadoSalvo();
});