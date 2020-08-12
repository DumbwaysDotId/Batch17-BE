const express = require("express");

const router = express.Router();

const {
  read,
  readOne,
  create: storeTodo,
} = require("../controller/database/todo");

const { readFoo, readBar } = require("../controller/database/fooBar");
const { readAuthor, readBook } = require("../controller/database/authorBook");

router.get("/todos", read);
router.get("/todo/:id", readOne);
router.post("/todo", storeTodo);

//demo hasOne and BelongsTo
router.get("/foo", readFoo);
router.get("/bar", readBar);

//demo HasMany and BelongsTo
router.get("/authors", readAuthor);
router.get("/books", readBook);

module.exports = router;
