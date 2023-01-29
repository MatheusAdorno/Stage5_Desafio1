export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const forestSound = new Audio("../audios/forest.wav");
  const rainSound = new Audio("../audios/rain.wav");
  const coffeShopSound = new Audio("../audios/coffeShop.wav");
  const fireplaceSound = new Audio("../audios/fireplace.wav");

  forestSound.loop = true;
  rainSound.loop = true;
  coffeShopSound.loop = true;
  fireplaceSound.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  };

  function timeEnd() {
    kitchenTimer.play();
  }

  function stopAudios() {
    forestSound.pause();
    rainSound.pause();
    coffeShopSound.pause();
    fireplaceSound.pause();
  }

  return {
    pressButton,
    timeEnd,
    forestSound,
    rainSound,
    coffeShopSound,
    fireplaceSound,
    stopAudios
  }
};