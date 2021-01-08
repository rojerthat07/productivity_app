const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const Todo = require("../models/Todo");

router.get("/", auth, (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => {
      if (err) throw err;
    });
});

router.post("/", (req, res) => {
  const { id, title, completed } = req.body;

  let todo = new Todo({
    id,
    title,
    completed,
  });

  todo
    .save()
    .then((todo) => res.json(todo))
    .catch((err) => {
      if (err) throw err;
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Todo.find({ id: id })
    .remove()
    .then(() => res.json({ status: "successfully deleted" }))
    .catch((err) => {
      if (err) throw err;
    });
});
module.exports = router;
