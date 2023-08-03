import { AreaFrame } from './area-frame';
// import { Area as Auth } from './auth';
import { Area as Unauth } from './unauth';
import { Area as Maintainance } from './maintainance';

export const Area = {
  path: '',
  component: AreaFrame,
  
  children: [
    // Auth,
    Unauth,
    Maintainance,
  ],
};