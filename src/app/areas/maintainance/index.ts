import { Shared } from '@shared';
import { Dummy } from '@app/areas/internal';
import { AreaFrame } from './area-frame';

const MAINTAINCE_PATH = 'maintainance';
const LibRouter = Shared.Lib.Router;
const redirect = LibRouter.redirectIfRouteMatched(MAINTAINCE_PATH);

export const Area = {
  path: MAINTAINCE_PATH,
  component: AreaFrame,
  redirect,

  meta: {
    isArea: {
      maintainance: true,
    },  
  },

  children: [
    {
      path: '',
      children: [Dummy],
    }, 
  ],
};
