const field = document.getElementById("field")
const ball = document.getElementById("ball")

field.addEventListener('click', (event) => {
  // console.log(event.clientX)
  console.log(ball, event, event.offsetX, event.offsetY)
  if (event.offsetY <= 180 && event.offsetY >= 15 && event.offsetX >= 30 && event.offsetX <= 685) {
    ball.style.left = `${event.offsetX - 25}px`;
    ball.style.top = `${event.offsetY + 10}px`;
  }
})