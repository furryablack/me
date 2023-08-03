import { RouteLocationNormalizedLoaded, START_LOCATION } from 'vue-router';

export function getInitialRoute(): RouteLocationNormalizedLoaded {
  return START_LOCATION;
}