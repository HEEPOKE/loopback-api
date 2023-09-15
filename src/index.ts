import {RestBindings} from '@loopback/rest';
import {AppApplication, ApplicationConfig} from './application';
import ConfigApp from './configs/config';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new AppApplication(options);
  await app.boot();
  await app.migrateSchema();
  await app.start();

  app
    .bind(RestBindings.ERROR_WRITER_OPTIONS)
    .to({safeFields: ['name', 'message', 'code', 'service']});

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}

if (require.main === module) {
  const config = {
    rest: {
      port: +(ConfigApp.PORT ?? 3000),
      host: ConfigApp.HOST,
      basePath: '/apis',
      gracePeriodForClose: 5000,
      openApiSpec: {
        setServersFromRequest: true,
      },
      cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,POST,DELETE',
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
