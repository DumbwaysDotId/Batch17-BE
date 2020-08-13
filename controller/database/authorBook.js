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
    const authors = await Author.findAll({
      include: {
        model: Book,
        as: "books",
        attributes: {
          exclude: ["authorId", "createdAt", "updatedAt"],
        },
        through: {
          model: AuhorBook,
          as: "information",
          attributes: {
            exclude: ["id", "bookId", "authorId", "createdAt", "updatedAt"],
          },
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      message: "response success",
      data: {
        authors,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readBookAuthors = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: {
        model: Author,
        as: "authors",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        through: {
          model: AuhorBook,
          as: "information",
          attributes: {
            exclude: ["id", "bookId", "authorId", "createdAt", "updatedAt"],
          },
        },
      },
      attributes: {
        exclude: ["authorId", "createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      message: "response success",
      data: {
        books,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
