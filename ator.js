0// código do ator
let xAtor = 85;
let yAtor = 366;
let comprimentoAtor = 30;
let alturaAtor = 30;
let diamentro = 15
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor,xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
         yAtor += 3;
      }
     
  }
  }

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i], xAtor, yAtor, diamentro)
    if (colisao){
      voltaAtorParaPosicaoInicial();
       sonsColidiu.play();
      if (pontosMaiorQueZero()){
          meusPontos -= 1;
    }
   }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
 
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,0,0)
  text(meusPontos, width / 5, 27);
}
function marcaPonto(){
  if( yAtor < 15){
    meusPontos += 1;
    sonsPontos.play();
    voltaAtorParaPosicaoInicial();
  }
} 

function pontosMaiorQueZero(){
  return meusPontos > 0 
}

function podeSeMover(){
  return yAtor < 366;
}