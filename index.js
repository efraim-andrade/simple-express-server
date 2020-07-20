const express = require("express");

const server = express();
const routes = express.Router();

server.use(express.json());

routes.get("/", (req, res) => {
  return res.send({ hello: "world" });
});

server.use(routes);

server.listen("8081", (err) => {
  if (err) console.log(err);

  console.log("Server is UP!");
});
