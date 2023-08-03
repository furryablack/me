import { Pages } from '@pages';
import { AreaFrame } from './area-frame';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      dashboard: true,
    },  
  },

  children: [
    {
      path: '',
      component: Pages.Dashboard.Overview,
    },
  ],
};
