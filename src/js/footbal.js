const field = document.querySelector(".football__box")
const ball = document.querySelector(".football__ball")

field.addEventListener('click', (event) => {
  // console.log(event, event.clientX, event.clientY)
  ball.style.left = `${event.clientX - Math.round(field.getBoundingClientRect().left)}px`;
  ball.style.top = `${event.clientY - Math.round(field.getBoundingClientRect().top)}px`;
})