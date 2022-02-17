const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
const controllers = require("./controller");

app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "OPTIONS", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users/login", controllers.login);
app.post("/users/userName", controllers.userName);
app.delete("/users/:id", controllers.deleteUser);
app.post("/users/email", controllers.email);
app.post("/users/logout", controllers.logout);
app.post("/users/signup", controllers.signup);
app.post("/orders", controllers.order);
app.get(`/playlists?tag=${tag}`, controllers.playlist);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
