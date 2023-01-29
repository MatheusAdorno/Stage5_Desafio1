import { elements } from './elements.js';
import sounds from './sounds.js';
import Sound from "./sounds.js";

const {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFireplace
} = elements;

let seconds = Number(secondsDisplay.textContent);
let minutes = Number(minutesDisplay.textContent);
let minutesDefinedWhenStart;
let timerTimeOut;

const sound = Sound();

function countDown() {
  timerTimeOut = setTimeout(function() {
    if (seconds <= 0) {
      seconds = 60;
      minutes--;
    }

    secondsDisplay.textContent = seconds--;

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');

    if (minutes <= 0 && seconds == 1) {
      buttonStop.setAttribute('disabled', true);
      buttonStop.classList.add('disabled');
      buttonPlay.removeAttribute('disabled');
      buttonPlay.classList.remove('disabled');
      reset();
      sound.timeEnd();
      return;
    }

    if (minutes <= 5) {
      buttonLessTime.setAttribute('disabled', true);
      buttonLessTime.classList.add('disabled');
    } else {
      buttonLessTime.removeAttribute('disabled', true);
      buttonLessTime.classList.remove('disabled');
    }

    countDown();
  }, 1000);
};

function reset() {
  clearTimeout(timerTimeOut);

  minutes = minutesDefinedWhenStart;
  seconds= 0;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
};

buttonPlay.addEventListener('click', function() {
  minutesDefinedWhenStart = minutes;

  buttonPlay.setAttribute('disabled', true);
  buttonPlay.classList.add('disabled');
  buttonStop.removeAttribute('disabled');
  buttonStop.classList.remove('disabled');

  sound.pressButton();

  countDown();
});

buttonStop.addEventListener('click', function() {
  buttonStop.setAttribute('disabled', true);
  buttonStop.classList.add('disabled');
  buttonPlay.removeAttribute('disabled');
  buttonPlay.classList.remove('disabled');

  sound.pressButton();

  reset();

  if (minutes >= 5) {
    buttonLessTime.removeAttribute('disabled', true);
    buttonLessTime.classList.remove('disabled');
  }
});

buttonMoreTime.addEventListener('click', function() {
  minutes += 5;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');

  buttonLessTime.removeAttribute('disabled');
  buttonLessTime.classList.remove('disabled');

  if (minutes > 0) {
    buttonPlay.removeAttribute('disabled', true);
    buttonPlay.classList.remove('disabled');
  } 

  sound.pressButton();
});

buttonLessTime.addEventListener('click', function() {
  console.log(minutes)
  
  if(minutes > 5) {
    minutes -= 5;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
  }
  else if(minutes <= 5) {
    minutes -= 5;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    buttonLessTime.setAttribute('disabled', true);
    buttonLessTime.classList.add('disabled');
  };

  if (minutes < 5) {
    buttonPlay.setAttribute('disabled', true);
    buttonPlay.classList.add('disabled');

    buttonLessTime.setAttribute('disabled', true);
    buttonLessTime.classList.add('disabled');
  } 

  sound.pressButton();
});

buttonForest.addEventListener('click', function() {
  sound.stopAudios();
  sound.forestSound.play();

  if (buttonForest.classList.contains('selected')) {
    sound.stopAudios();
  };

  buttonForest.classList.toggle('selected');

  buttonRain.classList.remove('selected');
  buttonCoffeShop.classList.remove('selected');
  buttonFireplace.classList.remove('selected');
});

buttonRain.addEventListener('click', function() {
  sound.stopAudios();
  sound.rainSound.play();

  if (buttonRain.classList.contains('selected')) {
    sound.stopAudios();
  };

  buttonRain.classList.toggle('selected');

  buttonForest.classList.remove('selected');
  buttonCoffeShop.classList.remove('selected');
  buttonFireplace.classList.remove('selected');
});

buttonCoffeShop.addEventListener('click', function() {
  sound.stopAudios();
  sound.coffeShopSound.play();

  if (buttonCoffeShop.classList.contains('selected')) {
    sound.stopAudios();
  };

  buttonCoffeShop.classList.toggle('selected');

  buttonForest.classList.remove('selected');
  buttonRain.classList.remove('selected');
  buttonFireplace.classList.remove('selected');
});

buttonFireplace.addEventListener('click', function() {
  sound.stopAudios();
  sound.fireplaceSound.play();

  if (buttonFireplace.classList.contains('selected')) {
    sound.stopAudios();
  };

  buttonFireplace.classList.toggle('selected');

  buttonForest.classList.remove('selected');
  buttonRain.classList.remove('selected');
  buttonCoffeShop.classList.remove('selected');
  
});

