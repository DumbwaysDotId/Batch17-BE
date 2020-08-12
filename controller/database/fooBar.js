const { Bar, Foo } = require("../../models");

exports.readFoo = async (req, res) => {
  try {
    const foo = await Foo.findAll({
      include: {
        model: Bar,
        attributes: {
          exclude: ["createdAt", "updateAt"],
        },
      },
    });

    res.status(200).send({
      message: "reponse success",
      data: {
        foo,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readBar = async (req, res) => {
  try {
    const bar = await Bar.findAll({
      include: {
        model: Foo,
        as: "parent",
      },
    });

    res.status(200).send({
      message: "reponse success",
      data: {
        bar,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
