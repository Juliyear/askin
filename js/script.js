// ==========================================================
//           INSTRUÇÃO IMPORTANTE, JULIANO!
// COLOQUE O ID DO VÍDEO DO YOUTUBE QUE VOCÊ QUER TOCAR AQUI
// ==========================================================
const YOUTUBE_VIDEO_ID = 'COLOQUE_O_ID_DO_VIDEO_AQUI';

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0', width: '0', videoId: YOUTUBE_VIDEO_ID,
        playerVars: {'autoplay': 0, 'controls': 0, 'loop': 1, 'playlist': YOUTUBE_VIDEO_ID},
    });
}
function playAudio() { if (player && typeof player.playVideo === 'function') player.playVideo(); }
function stopAudio() { if (player && typeof player.stopVideo === 'function') player.stopVideo(); }

document.addEventListener('DOMContentLoaded', () => {
    // Seletores de elementos da página
    const container = document.querySelector('.container');
    const filmes = document.querySelectorAll('.filme');
    const btnAceitar = document.getElementById('btn-aceitar');
    const btnRecusar = document.getElementById('btn-recusar');
    const textoFilmeSelecionado = document.getElementById('filme-selecionado-texto');
    const modal = document.getElementById('modal-surpresa');
    const btnSim = document.getElementById('btn-sim');
    const btnNao = document.getElementById('btn-nao');
    const textoResultado = document.getElementById('texto-resultado');

    let filmeEscolhido = null;

    // ==========================================================
    // NOVA LÓGICA: APLICAR ESTADO FINAL (Pode ser chamada a qualquer momento)
    // ==========================================================
    function aplicarEstadoFinal(filme, aceitouExtra) {
        // Trava a interface
        container.classList.add('finalizado');
        
        // Marca o filme correto como selecionado
        filmes.forEach(f => {
            if (f.dataset.filme === filme) {
                f.classList.add('selecionado');
            }
        });

        // Monta a mensagem final
        let mensagemFinal = `Nosso encontro está confirmado! ♡<br>Vamos assistir "<strong>${filme}</strong>"`;
        if (aceitouExtra) {
            mensagemFinal += ", e o 'ge efi zinho' depois está mais do que aceito! 😉💦";
            playAudio(); // Toca a música se o estado salvo diz que ela aceitou
        } else {
            mensagemFinal += ".<br>O mais importante é o nosso tempo juntos. Te amo! ❤️";
            stopAudio();
        }
        
        // Exibe a mensagem
        textoResultado.innerHTML = mensagemFinal;
    }

    // ==========================================================
    // NOVA LÓGICA: VERIFICAR SE JÁ EXISTE UMA RESPOSTA SALVA
    // ==========================================================
    function verificarEstadoSalvo() {
        const respostaSalvaJSON = localStorage.getItem('conviteResposta');
        if (respostaSalvaJSON) {
            const respostaSalva = JSON.parse(respostaSalvaJSON);
            // Se encontrou uma resposta, já carrega a página no estado final
            aplicarEstadoFinal(respostaSalva.filme, respostaSalva.aceitouExtra);
        }
    }
    
    // Função que finaliza a escolha e SALVA no localStorage
    function finalizarEscolha(aceitouExtra) {
        // 1. Esconde o modal
        modal.classList.remove('visivel');
        
        // 2. Cria o objeto com a resposta para salvar
        const resposta = {
            filme: filmeEscolhido,
            aceitouExtra: aceitouExtra
        };

        // 3. Salva a resposta como um texto no localStorage
        localStorage.setItem('conviteResposta', JSON.stringify(resposta));

        // 4. Aplica o estado final na tela
        aplicarEstadoFinal(resposta.filme, resposta.aceitouExtra);
    }
    
    // --- Lógica principal que roda na página ---

    // Lógica para seleção de filmes (só funciona se o site não estiver finalizado)
    filmes.forEach(filme => {
        filme.addEventListener('click', () => {
            // Checa se o container já tem a classe 'finalizado'. Se tiver, não faz nada.
            if (container.classList.contains('finalizado')) {
                return;
            }
            filmes.forEach(f => f.classList.remove('selecionado'));
            filme.classList.add('selecionado');
            filmeEscolhido = filme.dataset.filme;
            textoFilmeSelecionado.textContent = `Você escolheu: ${filmeEscolhido}!`;
            btnAceitar.disabled = false;
        });
    });
    
    // Botões
    btnRecusar.addEventListener('click', () => alert("Ah... que pena. 😢 Se mudar de ideia, é só recarregar a página!"));
    btnAceitar.addEventListener('click', () => { modal.classList.add('visivel'); playAudio(); });
    btnSim.addEventListener('click', () => finalizarEscolha(true));
    btnNao.addEventListener('click', () => finalizarEscolha(false));

    // ==========================================================
    // EXECUTA A VERIFICAÇÃO ASSIM QUE A PÁGINA CARREGA
    // ==========================================================
    verificarEstadoSalvo();
});