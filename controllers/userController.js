const dotenv = require('dotenv');
const knex = require('knex');
const knexConfig = require('../knexfile');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
const knexWorker = knex(knexConfig[envs.NODE_ENV]);

exports.index = function (req, res) {
  knexWorker
    .select('*')
    .from('user')
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: 'Error',
      });
    });
};
