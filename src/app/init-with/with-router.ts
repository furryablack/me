import { App } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { Shared } from '@shared';

const LibRouter = Shared.Lib.Router;

interface IParams {
  app: App,
  area: RouteRecordRaw,
  baseUrl: string,
}

export function withRouter(params: IParams) {
  const router = LibRouter.createRouter(params.area, params.baseUrl);
  router.install(params.app);
  return router;
}
