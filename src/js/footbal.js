const field = document.getElementById("field")
const ball = document.getElementById("ball")

field.addEventListener('click', (event) => {
  // console.log(event.clientX)
  console.log(ball, event, event.offsetX, event.offsetY)
  ball.style.left = `${event.offsetX - 25}px`;
  ball.style.top = `${event.offsetY - 25}px`;
})