function left() {
  const ball = document.getElementById('ball');
  ball.classList.add('movingLeft');
  ball.classList.remove('movingRight');
 }

function right() {
  const ball = document.getElementById('ball');
  ball.classList.add('movingRight');
  ball.classList.remove('movingLeft');
}
