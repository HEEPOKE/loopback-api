import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import ConfigApp from '../configs/config';

const config = {
  name: 'db',
  connector: 'postgresql',
  host: ConfigApp.DB_HOST,
  port: ConfigApp.DB_PORT,
  user: ConfigApp.DB_USERNAME,
  password: ConfigApp.DB_PASSWORD,
  database: ConfigApp.DB_NAME
};

@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
