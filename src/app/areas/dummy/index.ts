import { Pages } from '@pages';
import { AreaFrame } from './area-frame';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      dummy: true,
    },  
  },

  children: [
    {
      path: '/:pathMatch(.*)*',
      component: Pages.Dummy.NotFound,
    },
  ],
};