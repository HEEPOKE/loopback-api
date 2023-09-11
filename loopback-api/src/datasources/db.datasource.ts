import { juggler } from '@loopback/repository';
import ConfigApp from '../configs/config';

export const postgresqlConfig = {
  name: 'postgresql',
  connector: 'postgresql',
  host: ConfigApp.DB_HOST,
  port: ConfigApp.DB_PORT,
  user: ConfigApp.DB_USERNAME,
  password: ConfigApp.DB_PASSWORD,
  database: ConfigApp.DB_NAME,
};

export class PostgresqlDataSource extends juggler.DataSource {
  static dataSourceName = 'postgresql';

  constructor() {
    super(postgresqlConfig);
  }
}