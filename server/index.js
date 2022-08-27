const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");

const movieRoutes = require('./routes/movies')

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


// ROUTES
app.use(cors());
app.use('/movies', movieRoutes)

app.get("/", (req, res) => {
  res.send("hello world");
});

const CONNECTION_URL =
  "mongodb+srv://vivekthapliyal:xErbST7UJHlnn3t7@cluster0.lkgagzi.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error)=> console.log(error));
