//Init Express
const express = require("express");

//init body-parser
const bodyParser = require("body-parser");

//gunakan express
const app = express();

//Define Port
const port = 5001;

app.use(bodyParser.json());

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

app.get("/todos", (req, res) => {
  res.send({ data: todos });
});

app.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  res.send(todos[index]);
});

app.post("/todo", (req, res) => {
  todos = [...todos, req.body];
  res.send({ data: todos });
});

app.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos[id - 1] = { ...todos[id - 1], ...req.body };
  res.send({ data: todos[id - 1] });
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.send({ data: todos });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
