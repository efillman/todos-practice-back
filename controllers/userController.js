const userModel = require('../models/UserModel');

exports.index = (req, res) => {
  userModel.userIndex()
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: 'Error',
      });
    });
};
