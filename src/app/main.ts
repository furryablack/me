import { Shared } from '@shared';
import { createApp } from './create-app';

const LibEnvironment = Shared.Lib.Environment;
const ENV = LibEnvironment.getParsed();

main();

function main() {
  const app = createApp({
    baseUrl: ENV.VITE_APP_BASE_URL,
    strict: !ENV.PROD,
    performance: ENV.DEV,
  });

  app.isReady.then(() => app.mount('body'));
  app.isReady.catch((error) => console.error(error));
}
