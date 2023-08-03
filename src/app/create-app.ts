import { createApp as createVueApp, defineAsyncComponent } from 'vue';
import { initWith } from './init-with';
import { Area as App } from './areas';

interface IParams {
  baseUrl: string,
  strict: boolean,
  performance: boolean,
}

export const Viewport = defineAsyncComponent(() => import('./viewport.vue'));

export function createApp(params: IParams) {
  const app = createVueApp(Viewport);
  const router = initWith.router({ app, area: App, baseUrl: params.baseUrl });
  const isReady = router.isReady();
  const mount = app.mount;

  app.config.performance = params.performance;

  return { mount, isReady };
}

