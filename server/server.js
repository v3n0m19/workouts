require("dotenv").config();
const express = require("express");

const workoutRoutes = require('./routes/workouts')

//express app
const app = express();

//middleware: something that runs between request and response. get and post are also middleware
app.use(express.json())//to access req object ex: req.body
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); //makes it so that control flows to the next middleware
});

//routes
app.use('/api/workouts',workoutRoutes)


//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000!!");
});
