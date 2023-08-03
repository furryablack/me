import { Dashboard, User } from '@app/areas/internal';
import { AreaFrame } from './area-frame';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      unauth: true,
    },    
  },

  children: [
    {
      path: '',
      children: [Dashboard],
    },  
    
    {
      path: 'me',
      children: [User],
    },
  ],
};
