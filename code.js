var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var vidas = 0;
var lobby = createSprite(50, 200, 100, 200);
lobby.shapeColor = "lightgreen";
var final = createSprite(350, 200, 100, 200);
final.shapeColor = "lightblue";
var parede1= createSprite(200, 100, 400, 10);
parede1.shapeColor = "black";
var parede2 = createSprite(200, 300, 400, 10);
parede2.shapeColor = "black";
var jogador = createSprite(50, 200, 20, 20);
jogador.shapeColor = "blue";
var bola1 = createSprite(150, 200, 20, 20);
bola1.shapeColor = "red";
bola1.velocityY = -4;
var bola2 = createSprite(200, 200, 20, 20);
bola2.shapeColor = "red";
bola2.velocityY = -4;
var bola3 = createSprite(250, 200, 20, 20);
bola3.shapeColor = "red";
bola3.velocityY = -4;




function draw() {
  background("white");
  if (keyDown("right")) {
    jogador.x = jogador.x + 1;
  }
  if (keyDown("left")) {
    jogador.x = jogador.x - 1;
  }
  if (jogador.isTouching(bola1)) {
    jogador.x = 50;
    vidas = vidas + 1;
  }
  if (jogador.isTouching(bola2)) {
    jogador.x = 50;
    vidas = vidas + 1;
  }
  if (jogador.isTouching(bola3)) {
    jogador.x = 50;
    vidas = vidas + 1;
  }
  stroke("black");
  textSize(30);
  text("Vidas:" + vidas, 30, 360);
  createEdgeSprites();
  jogador.bounceOff(edges);
  bola1.bounceOff(parede1);
  bola1.bounceOff(parede2);
  bola2.bounceOff(parede1);
  bola2.bounceOff(parede2);
  bola3.bounceOff(parede1);
  bola3.bounceOff(parede2);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
