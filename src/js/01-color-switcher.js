const BtnStart = document.querySelector('button[data-start]');
const BtnStop = document.querySelector('button[data-stop]');

let BgColorTimer = null;

BtnStop.setAttribute('disabled', 'true');

BtnStart.addEventListener('click', onBtnStartClick);
BtnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  BtnStart.setAttribute('disabled', 'true');
  BtnStop.removeAttribute('disabled');

  BgColorTimer = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStopClick() {
  BtnStart.removeAttribute('disabled');
  BtnStop.setAttribute('disabled', 'true');
  clearInterval(BgColorTimer);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
