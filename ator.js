//código do ator

let yAtor = 370;
let xAtor = 85;
let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25)
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play(0,1,0.1);
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial() {
   yAtor = 366;
}

function incluiPontos() {
  textSize(25);
  textAlign(CENTER);
  fill(color(255,240,60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor < 10) {
    meusPontos += 1;
    somDoPonto.play(0,1,0.2);
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 370;
}