const { todo } = require("../../models");

exports.read = async (request, response) => {
  try {
    const todos = await todo.findAll();

    response.status(200).send({
      message: "response Success",
      data: { todos },
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.readOne = async (req, res) => {
  try {
    const { id } = req.params;

    const detailTodo = await todo.findOne({
      where: {
        id: id,
      },
    });

    if (!detailTodo)
      return res.status(400).send({
        message: `todo with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: {
        detailTodo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.create = async (req, res) => {
  try {
    const responseTodo = await todo.create(req.body);

    res.status(200).send({
      message: "Todo has been created",
      data: {
        todo: responseTodo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await todo.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      message: `Delete Success!!! Your todo with ID: ${id} has been deleted`,
    });
  } catch (err) {
    console.log(err);
  }
};
