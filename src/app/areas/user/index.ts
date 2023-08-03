import { Pages } from '@pages';
import { AreaFrame } from './area-frame';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      user: true,
    },  
  },

  children: [
    {
      path: '',
      component: Pages.User.Profile,
    },
  ],
};
