const letreiro = document.getElementById('letreiro');
const container = document.querySelector('.container');

let pos = 0;
let direcao = 1; // 1 = direita, -1 = esquerda
const velocidade = 2; // pixels por frame

function animarLetreiro() {
  const limite = container.clientWidth - letreiro.clientWidth;
  pos += direcao * velocidade;

  if (pos >= limite) {
    direcao = -1; // muda para esquerda
  } else if (pos <= 0) {
    direcao = 1; // muda para direita
  }

  letreiro.style.left = pos + 'px';
  requestAnimationFrame(animarLetreiro);
}

animarLetreiro();
