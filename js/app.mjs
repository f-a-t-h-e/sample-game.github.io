import Game from "./Game.mjs";

let lastTime = 0;

window.addEventListener("load", function () {
  /**@type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas1");
  const context = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;

  context.fillStyle = "white";
  context.lineWidth = 3;
  context.strokeStyle = "white";
  /**@type {Game} */
  const game = new Game({ canvas });

  animate(lastTime);
  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    game.render(context, deltaTime);
    window.requestAnimationFrame(animate);
  }
});
