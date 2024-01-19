let board
let indexFly = 0
let flyX = 10

window.onload = () => {
  board = document.getElementById("board")
  board.height = 500
  board.width = 1000

  context = board.getContext("2d")

  flyImg0 = new Image()
  flyImg0.src = "./fly0.jpg"
  flyImg1 = new Image()
  flyImg1.src = "./fly1.jpg"
  flyImg2 = new Image()
  flyImg2.src = "./fly2.jpg"
  flyImg3 = new Image()
  flyImg3.src = "./fly3.jpg"
  flyImg4 = new Image()
  flyImg4.src = "./fly4.jpg"
  flyImg5 = new Image()
  flyImg5.src = "./fly5.jpg"
  flyImg6 = new Image()
  flyImg6.src = "./fly6.jpg"
  flyImg7 = new Image()
  flyImg7.src = "./fly7.jpg"

  setInterval(fly, 100)
}

const fly = () => {
  context.clearRect(flyX, 50, 150, 100)
  indexFly++
  flyX += 5
  switch (indexFly % 8) {
    case 0:
      context.drawImage(flyImg0, flyX, 50, 150, 100)
      break
    case 1:
      context.drawImage(flyImg1, flyX, 50, 150, 100)
      break
    case 2:
      context.drawImage(flyImg2, flyX, 50, 150, 100)
      break
    case 3:
      context.drawImage(flyImg3, flyX, 50, 150, 100)
      break
    case 4:
      context.drawImage(flyImg4, flyX, 50, 150, 100)
      break
    case 5:
      context.drawImage(flyImg5, flyX, 50, 150, 100)
      break
    case 6:
      context.drawImage(flyImg6, flyX, 50, 150, 100)
      break
    case 7:
      context.drawImage(flyImg7, flyX, 50, 150, 100)
      indexFly = 0
      break
  }
}
