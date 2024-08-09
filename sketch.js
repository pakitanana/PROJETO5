let palavra;
let imagem;
let musica;

function preload(){
  imagem= 
    loadImage("imagem.png");
  musica= 
    loadSound("musica.mp3");
}

function setup() {
  createCanvas(800, 800);
  palavra = xerequinha();
  musica. loop();
}

function draw() {
  background("violet");
  image(imagem,50,200,600,400)
  pepeka();
  periquita();
  xerequinha();
}

function pepeka(){
  
  
  fill("white");
  textSize(30);
  textAlign(CENTER,CENTER);
}

function periquita(){
  
  let maximo= width;
  let minimo= 0  ;
  
  let quantidade = map(mouseX, 0,width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300 ,300);  
}

function xerequinha(){
  let palavras= ["BILLIE GOSTOSA "];
  return random (palavras)
  
}
  