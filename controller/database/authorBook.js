const { Book, Author, AuhorBook } = require("../../models");

exports.readAuthor = async (req, res) => {
  try {
    const author = await Author.findAll({
      include: {
        model: Book,
        as: "books",
      },
    });

    res.status(200).send({
      message: "response success",
      data: {
        author,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readBook = async (req, res) => {
  try {
    const book = await Book.findAll({
      include: {
        model: Author,
        as: "author",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["authorId", "updatedAt", "createdAt", "AuthorId"],
      },
    });

    res.status(200).send({
      message: "response sucess",
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readAuthorBooks = async (req, res) => {
  try {
    const authorBooks = await Author.findAll({
      include: {
        model: Book,
        as: "books",
      },
    });

    res.status(200).send({
      message: "response success",
      data: {
        authorBooks,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readBookAuthors = async (req, res) => {
  try {
    const bookAuthors = await Book.findAll({
      include: {
        model: Author,
        as: "author",
      },
    });

    res.status(200).send({
      message: "response success",
      data: {
        bookAuthors,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
