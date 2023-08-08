import { Pages } from '@pages';
import { AreaFrame } from './area-frame';

export const Area = {
  path: '',
  component: AreaFrame,

  meta: {
    isArea: {
      sos: true,
    },  
  },

  children: [
    {
      path: '',
      component: Pages.SOS.WhatAreDoing,
    },

    {
      path: 'statement',
      component: Pages.SOS.Statement,     
    },
  ],
};
