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
  {
    id: 3,
    title: "Nama orang",
    isDone: true,
  },
];

exports.getTodos = (req, res) => {
  res.send({ data: todos });
};

exports.detailTodo = (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  res.send(todos[index]);
};

exports.storeTodo = (req, res) => {
  todos = [...todos, req.body];
  res.send({ data: todos });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  todos[id - 1] = { ...todos[id - 1], ...req.body };
  res.send({ data: todos[id - 1] });
};

exports.destroyTodo = (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.send({ data: todos });
};
