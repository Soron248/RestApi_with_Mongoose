const express = require("express");
const {
  getUser,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const route = express.Router();

route.get("/api/users", getUser);
route.get("/api/users/:id", getSingleUser);
route.delete("/api/users/:id", deleteUser);
route.patch("/api/users/:id", updateUser);
route.post("/api/users", createUser);

module.exports = route;
