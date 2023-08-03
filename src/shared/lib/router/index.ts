import { createRouter } from './create-router';
import { getInitialRoute } from './get-initial-route';
import { redirectIfRouteMatched } from './redirect-if-route-matched';

export const Router = {
  createRouter,
  getInitialRoute,
  redirectIfRouteMatched,
};