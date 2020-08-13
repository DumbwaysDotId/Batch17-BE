const express = require("express");

const router = express.Router();

const { authenticated } = require("../middleware/auth");

const {
  read,
  readOne,
  create: storeTodo,
} = require("../controller/database/todo");

const { readFoo, readBar } = require("../controller/database/fooBar");
const {
  readAuthor,
  readBook,
  readAuthorBooks,
  readBookAuthors,
} = require("../controller/database/authorBook");

const { register, readUsers, login } = require("../controller/database/user");

router.get("/todos", authenticated, read);
router.get("/todo/:id", readOne);
router.post("/todo", storeTodo);

//demo authentication system
router.get("/users", readUsers);
router.post("/register", register);
router.post("/login", login);

//demo hasOne and BelongsTo
router.get("/foo", readFoo);
router.get("/bar", readBar);

//demo HasMany and BelongsTo
router.get("/authors", readAuthor);
router.get("/books", readBook);

//demo ManyToMany
router.get("/author-books", readAuthorBooks);
router.get("/book-authors", readBookAuthors);

module.exports = router;
