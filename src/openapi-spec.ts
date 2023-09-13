import {ApplicationConfig} from '@loopback/core';
import {AppApplication} from './application';
import ConfigApp from './configs/config';

async function exportOpenApiSpec(): Promise<void> {
  const config: ApplicationConfig = {
    rest: {
      port: +(ConfigApp.PORT ?? 3000),
      host: ConfigApp.HOST,
    },
  };
  const outFile = process.argv[2] ?? '';
  const app = new AppApplication(config);
  await app.boot();
  await app.exportOpenApiSpec(outFile);
}

exportOpenApiSpec().catch(err => {
  console.error('Fail to export OpenAPI spec from the application.', err);
  process.exit(1);
});
