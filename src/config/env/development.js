const dotenv = require('dotenv');

dotenv.config();

const development = {
  DATABASE_URL: process.env.DEV_DATABASE_URL,
  APP_PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.SECRET,
};
module.exports = development;
