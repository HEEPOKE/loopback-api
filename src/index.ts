import {ApplicationConfig, AppApplication} from './application';
import ConfigApp from './configs/config';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new AppApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}

if (require.main === module) {
  const config = {
    rest: {
      port: +(ConfigApp.PORT ?? 3000),
      host: ConfigApp.HOST,
      gracePeriodForClose: 5000,
      openApiSpec: {
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
