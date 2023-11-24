// Função para mostrar um conjunto por vez
function showNextSet(index) {
    // Esconde todos os conjuntos
    for (let i = 1; i <= 4; i++) {
      document.getElementById(`message${i}`).style.display = 'none';
      document.getElementById(`image${i}`).style.display = 'none';
    }

    // Mostra o conjunto atual
    document.getElementById(`message${index}`).style.display = 'block';
    document.getElementById(`image${index}`).style.display = 'block';

    // Agende a próxima chamada após 4 segundos
    if (index < 4) {
      setTimeout(() => {
        showNextSet(index + 1);
      }, 4000);
    }
  }

  // Inicia o processo chamando a função para mostrar o primeiro conjunto
  showNextSet(1);