// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let sonsColidiu;
let sonsPontos;
let sonsTrilha;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros =[imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro1,imagemCarro2,imagemCarro3]
  
  sonsColidiu = loadSound("sons/colidiu.mp3");
  sonsPontos = loadSound("sons/pontos.wav");
  sonsTrilha = loadSound("sons/trilha.mp3");
}