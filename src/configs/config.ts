import * as dotenv from 'dotenv';

dotenv.config();

const {
  HOST,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;

const ConfigApp = {
  HOST,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
};

export default ConfigApp;
