let fruits = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  // Cria uma fruta inicial
  spawnFruit();
}

function draw() {
  background(220);
  
  // Desenha e atualiza as frutas
  for (let i = fruits.length - 1; i >= 0; i--) {
    let f = fruits[i];
    fill(255, 0, 0);
    ellipse(f.x, f.y, 30, 30);
    f.y += f.speed;
    
    // Remove fruta se sair da tela
    if (f.y > height + 15) {
      fruits.splice(i, 1);
    }
  }
  
  // Chance de spawn de nova fruta
  if (random() < 0.02) {
    spawnFruit();
  }
  
  // Mostra a pontuação
  fill(0);
  textSize(16);
  text('Pontuação: ' + score, 10, 20);
}

function spawnFruit() {
  let f = {
    x: random(20, width - 20),
    y: -15,
    speed: random(2, 5)
  };
  fruits.push(f);
}

function mousePressed() {
  // Verifica se clicou em alguma fruta
  for (let i = fruits.length - 1; i >= 0; i--) {
    let f = fruits[i];
    let d = dist(mouseX, mouseY, f.x, f.y);
    if (d < 15) {
      // Corta a fruta
      fruits.splice(i, 1);
      score++;
    }
  }
}