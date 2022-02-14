const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
const controllers = require("./controller");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("users/login", controllers.login);
app.post("users/userName", controllers.userName);
app.delete("/users/:id", controllers.deleteUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
