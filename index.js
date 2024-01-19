import express from "express"
import { fileURLToPath } from "url"

const app = express()
app.use("/", express.static(fileURLToPath(new URL("home", import.meta.url))))

app.use(
  "/games",
  express.static(fileURLToPath(new URL("games", import.meta.url)))
)
app.use(
  "/links",
  express.static(fileURLToPath(new URL("links", import.meta.url)))
)

//
app.use(
  "/flappybird",
  express.static(fileURLToPath(new URL("flappybird", import.meta.url)))
)
app.use(
  "/pong",
  express.static(fileURLToPath(new URL("pong", import.meta.url)))
)
app.use(
  "/birdfly",
  express.static(fileURLToPath(new URL("birdfly", import.meta.url)))
)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
