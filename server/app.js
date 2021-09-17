const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const posts = require("./routes/index");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/posts", posts);

// make connection to database
mongoose
  .connect(process.env.MONGO_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful! 🎉"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`The app is listening on port ${port}`));