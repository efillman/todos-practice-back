const todoModel = require('../models/TodoModel');

exports.index = (req, res) => {
  todoModel.todoIndex()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: 'Error',
      });
    });
};
