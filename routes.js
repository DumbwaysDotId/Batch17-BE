const express = require("express");

//init group route
const router = express.Router();

let todos = [
  {
    id: 1,
    title: "Lola zeita",
    isDone: true,
  },
  {
    id: 2,
    title: "Andi Uciha",
    isDone: false,
  },
];

router.get("/todos", (req, res) => {
  res.send({ data: todos });
});

router.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  res.send(todos[index]);
});

router.post("/todo", (req, res) => {
  todos = [...todos, req.body];
  res.send({ data: todos });
});

router.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos[id - 1] = { ...todos[id - 1], ...req.body };
  res.send({ data: todos[id - 1] });
});

router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.send({ data: todos });
});

module.exports = router;
