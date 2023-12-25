import express from "express";
import { fileURLToPath } from "url";

const app = express();
app.use("/", express.static(fileURLToPath(new URL("home", import.meta.url))));
app.use(
  "/flappybird",
  express.static(fileURLToPath(new URL("flappybird", import.meta.url)))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port: ${PORT}`));
