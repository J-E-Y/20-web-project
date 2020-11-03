const container = document.getElementById('container');
const text = document.getElementById('text');
// if it needs to change totalTime, you should go to style.css and change either as well.action-btn

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();
function breathAnimation() {
  text.innerText = 'Breathe IN!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';
    setTimeout(() => {
      text.innerText = 'Breathe out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
