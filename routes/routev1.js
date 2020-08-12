const express = require("express");

const router = express.Router();

const {
  getTodos,
  detailTodo,
  storeTodo,
  updateTodo,
  destroyTodo,
} = require("../controller/todo");

router.get("/todos", getTodos);
router.get("/todo/:id", detailTodo);
router.post("/todo", storeTodo);
router.patch("/todo/:id", updateTodo);
router.delete("/todo/:id", destroyTodo);

module.exports = router;
