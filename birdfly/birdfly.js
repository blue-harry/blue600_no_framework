/** part one : variables */
let board
let indexFly = 0
let flyX = 0
let flying = false
let intervalID
const imgWidth = 150
const imgHeight = 100
const boardWidth = 1000
const boardHeight = 500

// create image objects
const flyImgFiles = [
  "./fly0.jpg",
  "./fly1.jpg",
  "./fly2.jpg",
  "./fly3.jpg",
  "./fly4.jpg",
  "./fly5.jpg",
  "./fly6.jpg",
  "./fly7.jpg",
]
const flyImges = []

for (const imgFile of flyImgFiles) {
  let imgObj
  imgObj = new Image()
  imgObj.src = imgFile
  flyImges.push(imgObj)
}

// console.log(flyImges)

/** 
flyImg0 = new Image()
flyImg0.src = "./fly0.jpg"

//  context.drawImage(flyImg0, flyX, 50, imgWidth, imgHeight)

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
*/

/** part two : lifecycle method/function: load page */
window.onload = () => {
  // get the cavas element
  board = document.getElementById("board")
  board.height = boardHeight
  board.width = boardWidth

  // get context for drawing images
  context = board.getContext("2d")
  context.drawImage(flyImges[0], flyX, 50, imgWidth, imgHeight)

  document.addEventListener("keydown", control)
}

/** part three : functions */
const fly = () => {
  context.clearRect(flyX, 50, imgWidth, imgHeight)
  indexFly++

  if (flyX >= boardWidth) {
    flyX = -imgWidth
  }

  flyX += 20

  if (indexFly >= 7) indexFly = 0
  context.drawImage(flyImges[indexFly], flyX, 50, imgWidth, imgHeight)

  /** 
  switch (indexFly) {
    case 0:
      context.drawImage(flyImg0, flyX, 50, imgWidth, imgHeight)
      break
    case 1:
      context.drawImage(flyImg1, flyX, 50, imgWidth, imgHeight)
      break
    case 2:
      context.drawImage(flyImg2, flyX, 50, imgWidth, imgHeight)
      break
    case 3:
      context.drawImage(flyImg3, flyX, 50, imgWidth, imgHeight)
      break
    case 4:
      context.drawImage(flyImg4, flyX, 50, imgWidth, imgHeight)
      break
    case 5:
      context.drawImage(flyImg5, flyX, 50, imgWidth, imgHeight)
      break
    case 6:
      context.drawImage(flyImg6, flyX, 50, imgWidth, imgHeight)
      break
    case 7:
      context.drawImage(flyImg7, flyX, 50, imgWidth, imgHeight)
      indexFly = 0
      break
  }
  */
}

// control
const control = (event) => {
  if (event.code == "Space") {
    if (flying) {
      clearInterval(intervalID)
    } else {
      // set the auto run loop
      intervalID = setInterval(fly, 100)
    }

    // toggle status
    flying = !flying
  }
}
