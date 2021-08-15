const dotenv = require('dotenv');
const app = require('./app');

// setup read from .env
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
const PORT = envs.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
