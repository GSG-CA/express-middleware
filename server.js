const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 8080);

// STEP1: create a logger middleware to log millisecond timestamp before any request
// app.use((req, res, next) => {});

// STEP2: create a middleware to catch request data and modify on request object
// app.use((req, res, next) => {});


// STEP4: use morgan as a third party middleware
// app.use((req, res, next) => {});

app.use(express.static(path.join(__dirname, "public")));

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/login", (req, res) => {
  /* from here try to get data from request.body, try to modify the request object in separate middleware,
   So I can reach body here */
  const { body } = req;
  console.log(body);
  res.redirect("/");
});


app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
